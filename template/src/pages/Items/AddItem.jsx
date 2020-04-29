import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// import components
import { AddItemForm } from '../../components/forms'

// redux imports
import { addItem } from '../../store/example' // redux action


// TODO: change to your api url:
const BASE_URL = "http://localhost:3000"

/* A form example for POSTing a new item to an api: */
export const AddItem = ({
  addItem
}) => {
  const [loading, setLoading] = useState(false) // form loading status (consider enum)
  const [errors, setErrors] = useState(undefined) // errors from server response

  const showSuccessMessage = (message) => {
    alert(message)
    // TODO: implement your custom alert component here

  }

  const onHandleSubmit = (itemData) => {
    setErrors(undefined)
    console.log('submitting item data:', JSON.stringify(itemData))

    // Post itemData to api and handle response
    handleCreateItem(itemData)
  }

  // (Uncomment api code for functionality)
  // Makes a POST api call to '/api/items'
  const handleCreateItem = (itemData) => {
    setLoading(true)

    addItem(itemData)

    // fetch(BASE_URL + "/api/items", {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ item: itemData })
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log('got data!', data)
    //     // check for success status, show success message, (if using redux, update items there as well)
    //     if(data.success) {
    //       showSuccessMessage(data.message)
    //       addItem(itemData) // Only add to redux if api update is successful
    //     }
    //   })
    //   .catch(err => {
    //     console.log('error:', err)
    //     setErrors(err.toString())
    //   })

    setLoading(false)
  }

  return (
    <StyledAddItem className="page-container">
      <header className="page-header">
        <h3>Add Item</h3>
      </header>
      <section className="section-container">
        <AddItemForm
          onHandleSubmit={onHandleSubmit}
          errors={errors}
          loading={loading}
        />
      </section>
    </StyledAddItem>
  )
}

const StyledAddItem = styled.div`
  // add styles here

`

export default connect(
  null,
  { addItem },
)(AddItem); // for React.lazy()