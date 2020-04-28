import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


export const EditItemForm = ({
  itemData,
  errors,
  loading,
  onHandleSubmit
}) => {
  const [formData, setFormData] = useState(undefined)
  const [formErrors, setFormErrors] = useState(null)

  useEffect(() => {
    console.log('item data passed to EditItemForm:', itemData)

    setFormData(itemData)
  }, [itemData])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // error-checking
    if(formData.title === "")
      setFormErrors("Title field cannot be empty")
    else {
      // submit form data
      onHandleSubmit(formData)
    }
  }
  
  // const resetForm = () => setFormData(undefined)

  if(!formData)
    return (
      <div className="section-container">
        <p>Loading...</p>
      </div>
    )
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