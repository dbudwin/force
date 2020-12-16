import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { Media } from "v2/Utils/Responsive"
import { ScrollIntoView } from "v2/Utils/ScrollIntoView"

import { Pagination_pageCursors } from "v2/__generated__/Pagination_pageCursors.graphql"

import {
  Box,
  LargePagination,
  Separator,
  SmallPagination,
  PaginationProps,
} from "@artsy/palette"

interface Props {
  hasNextPage: boolean
  onClick?: (cursor: string, page: number) => void
  onNext?: () => void
  pageCursors: Pagination_pageCursors
  scrollTo?: string
}

export const Pagination: React.FC<Props> = ({
  hasNextPage,
  onClick = _cursor => ({}),
  onNext = () => ({}),
  pageCursors,
  scrollTo = null,
}) => {
  if (pageCursors.around.length === 1) {
    return null
  }

  const handleClick = (cursor, page, event) => {
    event.preventDefault()
    onClick(cursor, page)
  }

  const paginationProps: PaginationProps = {
    hasNextPage,
    onClick: handleClick,
    onNext,
    pageCursors: pageCursors as any,
    scrollTo,
  }

  return (
    <ScrollIntoView selector={scrollTo}>
      <Media at="xs">
        <SmallPagination {...paginationProps} />
      </Media>
      <Media greaterThan="xs">
        <Box>
          <Separator mb={3} pr={2} />
          <LargePagination {...paginationProps} />
        </Box>
      </Media>
    </ScrollIntoView>
  )
}

export const PaginationFragmentContainer = createFragmentContainer(Pagination, {
  pageCursors: graphql`
    fragment Pagination_pageCursors on PageCursors {
      around {
        cursor
        page
        isCurrent
      }
      first {
        cursor
        page
        isCurrent
      }
      last {
        cursor
        page
        isCurrent
      }
      previous {
        cursor
        page
      }
    }
  `,
})
