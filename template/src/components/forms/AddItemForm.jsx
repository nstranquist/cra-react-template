import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const emptyAddItem = {
  title: "",
  desc: ""
}

/* A form example for POSTing a new item to an api: */
export const AddItemForm = ({
  onHandleSubmit,
  errors,
  loading
}) => {
  const [itemData, setItemData] = useState(emptyAddItem)
  const [formErrors, setFormErrors] = useState(null)

  useEffect(() => {
    if(loading)
      resetForm()
  }, [loading])

  const handleChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setFormErrors(null)

    // error-check on client side
    if(itemData.title === "") // checks if field is empty
      setFormErrors('item title must not be empty')
    else
      onHandleSubmit(itemData)
  }

  const resetForm = () => {
    setItemData(emptyAddItem)
    setFormErrors(null)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {errors && <div className="error-text"><p className="error-text">{errors}</p></div>}
      {formErrors && <div className="error-text"><p className="error-text">{formErrors}</p></div>}
      <p className="form-item">
        <label>Title: </label>
        <input
          autoFocus
          type="text"
          name="title"
          disabled={loading}
          value={itemData.title}
          onChange={handleChange}
        />
      </p>
      <p className="form-item">
        <label>Desc: </label>
        <input
          type="text"
          name="desc"
          disabled={loading}
          value={itemData.desc}
          onChange={handleChange}
        />
      </p>
      <p className="form-button">
        <button type="submit">Submit</button>
      </p>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  background: transparent;
  padding: 20px;
  margin: 0 auto;
  font-family: 'Helvetica', sans-serif;

  .form-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;

    label {
      margin-right: 5px;
      font-size: 14px;
      padding: 3px;
    }
    input {
      flex: 1;
    }
    .form-button {
      width: 100%;
      text-align: center;

      button {
        margin: 0 auto;
        cursor: pointer;
      }
    }
  }
`
