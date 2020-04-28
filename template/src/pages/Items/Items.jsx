import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import components
import { ItemPreview } from './ItemPreview'
import { UnstyledLink } from '../../styles/link.styled'
import { boxShadows } from '../../styles/shadows.style'

const Items = ({
  items,
  loading,
  errors
}) => {

  const onHandleEdit = itemData => {
    console.log('editing item with data:', itemData)

    // Make api 'PUT' call here

  }

  const onHandleDelete = id => {
    console.log('deleting item with id:', id)

    // Make api 'DELETE' call here

  }

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
            <UnstyledLink to={`/items/${item.id}`} key={index}>
              <ItemPreview
                item={item}
                onHandleEdit={onHandleEdit}
                onHandleDelete={onHandleDelete}
              />
            </UnstyledLink>
          )) : (
            <div className="item-item">
              <p>There are no items yet.</p>
              <p style={{marginTop:18}}>
                <Link to="/items/add">Add Item</Link>
              </p>
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


  .item-item {
    background: #fff;
    border: 1px solid rgba(0,0,0,.12);
    color: rgba(0,0,0,.9);
    font-family: 'Helvetica', sans-serif;
    padding: 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;

    box-shadow: ${boxShadows.shadow1};

    &:hover {
      box-shadow: ${boxShadows.hover1};
      transition: ${boxShadows.transition1};
    }

    button {
      cursor: pointer;
      z-index: 1001;
    }
  }
`