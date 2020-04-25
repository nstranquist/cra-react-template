import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

export const Items = ({
  items, // i.e. "items"
  loading,
  errors
}) => {
  return (
    <StyledItems className="items-page">
      <div className="page-container">
        <div className="page-header">
          <h3>List of Items</h3>
        </div>
        <section className="section-container">
          {errors && <div className="errors"><p className="error-text">{errors}</p></div>}
          {loading && <div className="loading-items"><p>loading...</p></div>}

          {/* Can pass item as prop to an <Item /> component */}
          {(items && items.length > 0) ? items.map((item, index) => (
            <div className="item item" key={index}>
              <p>Item number {index}</p>
            </div>
          )) : (
            <div className="item-item">
              There are no items yet.
            </div>
          )}
        </section>
      </div>
    </StyledItems>
  )
}

const mapStateToProps = (state) => ({
  items: state.example.examples,
  loading: state.example.loading,
  errors: state.example.errors
})

export const ConnectedItems = connect(
  mapStateToProps,
  {  }
)(Items)

const StyledItems = styled.div`

`