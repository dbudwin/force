/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomApp_LoggedOutTest_QueryVariables = {
    slug: string;
};
export type ViewingRoomApp_LoggedOutTest_QueryResponse = {
    readonly viewingRoom: {
        readonly " $fragmentRefs": FragmentRefs<"ViewingRoomApp_viewingRoom">;
    } | null;
};
export type ViewingRoomApp_LoggedOutTest_QueryRawResponse = {
    readonly viewingRoom: ({
        readonly title: string;
        readonly heroImageURL: string | null;
        readonly partner: ({
            readonly name: string | null;
            readonly id: string | null;
            readonly href: string | null;
        }) | null;
        readonly distanceToOpen: string | null;
        readonly distanceToClose: string | null;
        readonly status: string;
    }) | null;
};
export type ViewingRoomApp_LoggedOutTest_Query = {
    readonly response: ViewingRoomApp_LoggedOutTest_QueryResponse;
    readonly variables: ViewingRoomApp_LoggedOutTest_QueryVariables;
    readonly rawResponse: ViewingRoomApp_LoggedOutTest_QueryRawResponse;
};



/*
query ViewingRoomApp_LoggedOutTest_Query(
  $slug: ID!
) {
  viewingRoom(id: $slug) {
    ...ViewingRoomApp_viewingRoom
  }
}

fragment ViewingRoomApp_viewingRoom on ViewingRoom {
  ...ViewingRoomMeta_viewingRoom
  ...ViewingRoomHeader_viewingRoom
  ...ViewingRoomContentNotAccessible_viewingRoom
  status
}

fragment ViewingRoomContentNotAccessible_viewingRoom on ViewingRoom {
  status
  partner {
    href
    id
  }
}

fragment ViewingRoomHeader_viewingRoom on ViewingRoom {
  heroImageURL
  title
  partner {
    name
    id
  }
  distanceToOpen
  distanceToClose
  status
}

fragment ViewingRoomMeta_viewingRoom on ViewingRoom {
  title
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "slug",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "slug"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ViewingRoomApp_LoggedOutTest_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewingRoom",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ViewingRoom",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ViewingRoomApp_viewingRoom",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ViewingRoomApp_LoggedOutTest_Query",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewingRoom",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ViewingRoom",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "heroImageURL",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "partner",
            "storageKey": null,
            "args": null,
            "concreteType": "Partner",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "href",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "distanceToOpen",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "distanceToClose",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "status",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ViewingRoomApp_LoggedOutTest_Query",
    "id": null,
    "text": "query ViewingRoomApp_LoggedOutTest_Query(\n  $slug: ID!\n) {\n  viewingRoom(id: $slug) {\n    ...ViewingRoomApp_viewingRoom\n  }\n}\n\nfragment ViewingRoomApp_viewingRoom on ViewingRoom {\n  ...ViewingRoomMeta_viewingRoom\n  ...ViewingRoomHeader_viewingRoom\n  ...ViewingRoomContentNotAccessible_viewingRoom\n  status\n}\n\nfragment ViewingRoomContentNotAccessible_viewingRoom on ViewingRoom {\n  status\n  partner {\n    href\n    id\n  }\n}\n\nfragment ViewingRoomHeader_viewingRoom on ViewingRoom {\n  heroImageURL\n  title\n  partner {\n    name\n    id\n  }\n  distanceToOpen\n  distanceToClose\n  status\n}\n\nfragment ViewingRoomMeta_viewingRoom on ViewingRoom {\n  title\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'a776017f1a7e8b9dba99b5335a74d057';
export default node;
