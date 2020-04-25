import React from 'react'
import styled from 'styled-components'

export const PageNotFound = () => {
  return (
    <StyledPage>
      <div className="page-not-found-inner">
        <h1>404: Page Not Found</h1>
        <p>Please go back to our home page</p>
      </div>
    </StyledPage>
  )
}

const StyledPage = styled.div`

  .page-not-found-inner {
    font-family: sans-serif;
    padding: 5%;

    h1 {
      font-size: 44px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    p {
      font-size: 22px;
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
`