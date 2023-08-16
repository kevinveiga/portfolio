import React, { ReactElement } from 'react'

import { Button } from '@/components/button/button'
import { PaginationItemStyled, PaginationListStyled } from '@/components/pagination/paginationStyled'

export function Pagination({
  currentPage = 1,
  dataPerPage = 1,
  totalData = 1,
  paginate = (): any => null
}: any): ReactElement {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i += 1) {
    pageNumbers.push(i)
  }

  return (
    <PaginationListStyled>
      {pageNumbers.map((number) => (
        <PaginationItemStyled key={number}>
          <Button disabled={currentPage === number} height="35px" onClick={(): void => paginate(number)} pl={3} pr={3}>
            {number}
          </Button>
        </PaginationItemStyled>
      ))}
    </PaginationListStyled>
  )
}
