import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
// import components
import { EditItemForm } from '../../components/forms'
import { updateItem, setActiveId } from '../../store/example' // redux actions
import { selectActiveItem } from '../../store/selectors' // redux selector


// TODO: change to your api url:
const BASE_URL = "http://localhost:3000"

/* A form example for POSTing a new item to an api: */
export const EditItem = ({
  match,
  activeItem, // from redux activeId. not recommended, replace with API call if possible
  updateItem,
  setActiveId,
}) => {
  const [itemData, setItemData] = useState(undefined)
  const [errors, setErrors] = useState(undefined) // errors from server response
  const [loading, setLoading] = useState(false) // form loading status (consider using enum)

  useEffect(() => {
    const itemId = match.params.itemId;

    if(itemId) {
      // find item by id
      setActiveId(itemId)
      // getItemData(itemId)
    }
  }, [match.params])

  useEffect(() => {
    if(activeItem)
      setItemData(activeItem)
  }, [activeItem])

  /*
  const getItemData = itemId => {
    // TODO: Make api call to get individual item

  }
  */

  const showSuccessMessage = (message) => {
    alert(message)
    // TODO: implement your custom alert component here

  }

  const onHandleSubmit = (item) => {
    setItemData(item)
    setErrors(undefined)

    console.log('submitting item data:', JSON.stringify(item))

    // Post itemData to api and handle response
    handleUpdateItem(item)
  }

  // (Uncomment api code for functionality)
  // Makes a POST api call to '/api/items'
  const handleUpdateItem = (item) => {
    setLoading(true)

    updateItem(item)

    // fetch(BASE_URL + "/api/items", {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ item })
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log('got data!', data)
    //     // check for success status, show success message, (if using redux, update items there as well)
    //     if(data.success)
    //       showSuccessMessage(data.message)
    //   })
    //   .catch(err => {
    //     console.log('error:', err)
    //     setErrors(err.toString())
    //   })
    setLoading(false)

    showSuccessMessage("hook up your API to start making real changes!")
  }

  if(!itemData || !activeItem) {
    return (
      <div className="page-container">
        <div className="loading-container">
          <p>loading...</p>
        </div>
      </div>
    )
  }
  return (
    <StyledEditItem className="page-container">
      <header className="page-header">
        <h3>Edit Item</h3>
      </header>
      <section className="section-container">
        <EditItemForm
          item={itemData}
          onHandleSubmit={onHandleSubmit}
          errors={errors}
          loading={loading}
        />
      </section>
    </StyledEditItem>
  )
}

const StyledEditItem = styled.div`
  // add styles here

`

const mapStateToProps = (state) => ({
  activeItem: selectActiveItem(state)
})

export default connect(
  mapStateToProps,
  { updateItem, setActiveId }
)(EditItem)
