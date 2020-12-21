import request from "superagent"

const { POSITRON_URL } = require("sharify").data
const POSITRON_GRAPHQL_URL = POSITRON_URL + "/api/graphql"

export const positronql = options => {
  const { method = "post", query, variables, req } = options

  return new Promise<any>((resolve, reject) => {
    const r = request[method](POSITRON_GRAPHQL_URL).set(
      "Accept",
      "application/json"
    )

    if (req && req.user) {
      r.set("X-Access-Token", req.user.get("accessToken"))
    }

    r.send({
      query,
      variables: JSON.stringify(variables),
    })

    r.end((err, response) => {
      if (err) {
        return reject(err)
      }

      if (response.body.errors) {
        const error = new Error(JSON.stringify(response.body.errors))

        response.body.errors.map(({ message }) => {
          if (message.match(/Not Found/i)) {
            ;(error as any).status = 404
            return reject(error)
          } else if (message.match(/Must be a member/i)) {
            ;(error as any).status = 403
            return reject(error)
          }
        })
      }

      resolve(response.body.data)
    })
  })
}
