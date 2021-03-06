/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  path {
    fill: ${({ theme }) => theme.colors.foreground};
  }
`

const Twitter = (props: any) => (
  <Svg {...props} width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#141124"
      fillRule="evenodd"
      stroke="none"
      strokeWidth="1"
      d="M10 .275c5.385 0 9.75 4.354 9.75 9.725 0 5.371-4.365 9.725-9.75 9.725S.25 15.371.25 10C.25 4.629 4.615.275 10 .275zm2.617 5.202A2.482 2.482 0 0010.2 8.525a7.047 7.047 0 01-5.117-2.593 2.482 2.482 0 00.768 3.314 2.474 2.474 0 01-1.124-.31v.031c0 1.202.856 2.206 1.992 2.434a2.467 2.467 0 01-1.121.042 2.486 2.486 0 002.318 1.725 4.98 4.98 0 01-3.675 1.028 7.029 7.029 0 003.806 1.114c4.565 0 7.062-3.782 7.062-7.062 0-.108-.002-.215-.007-.321.485-.35.906-.787 1.238-1.286-.445.197-.923.33-1.426.39a2.49 2.49 0 001.092-1.373c-.48.285-1.01.492-1.576.603a2.48 2.48 0 00-1.812-.784z"
    />
  </Svg>
)

export default Twitter
