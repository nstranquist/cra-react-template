import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
// import components

// import others



const Home = ({
  example
}) => {
  const [data, setData] = useState(null)

  return (
    <StyledHome className="home-page">
      <div className="page-container">
        <header className="page-header">
          <h3>Home Page</h3>
        </header>
        <section className="section-container">
          <p>Home Content</p>
        </section>
      </div>
    </StyledHome>
  )
}

const mapStateToProps = (state) => ({
  example: state.example,
})

export const ConnectedHome = connect(
  mapStateToProps,
  {  }
)(Home)

const StyledHome = styled.div`

`
