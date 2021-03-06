import React, { useState } from 'react'
import styled from 'styled-components'


const emptyUserForm = {
  username: "",
  password: "",
  confirmPassword: "",
}

export const UserForm = ({
  onHandleSubmit
}) => {
  const [formData, setFormData] = useState(emptyUserForm)
  const [formErrors, setFormErrors] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setFormErrors(null)

    if(formData.username === "")
      setFormErrors("username cannot be empty")
    else if(formData.password.length < 6)
      setFormErrors("password must be at least 6 characters")
    else if(formData.password !== formData.confirmPassword)
      setFormErrors("passwords must match")
    else {
      // submit form data
      onHandleSubmit(formData)
      resetForm()
    }
  }
  
  const resetForm = () => {
    setFormData(emptyUserForm)
    setFormErrors(null)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {formErrors && <div><p className="error-text">{formErrors}</p></div>}
      <p className="form-item">
        <label>Username: </label>
        <input
          autoFocus
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </p>
      <p className="form-item">
        <label>Password: </label>
        <input
          type="password"
          placeholder="(min. 6 characters)"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </p>
      <p className="form-item">
        <label>Confirm: </label>
        <input
          type="password"
          placeholder="Re-enter password"
          name="confirmPassword"
          value={formData.confirmPassword}
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
      }
    }
  }
`