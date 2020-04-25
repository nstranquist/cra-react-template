import React, { useState } from 'react'
import styled from 'styled-components'


const emptyUserForm = {
  username: "",
  password: "",
}

export const UserForm = () => {
  const [formData, setFormData] = useState(emptyUserForm)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // submit form data
    console.log('form data:', JSON.stringify(formData))
    
    resetForm()
  }
  
  const resetForm = () => setFormData(emptyUserForm)

  return (
    <StyledForm onSubmit={handleSubmit}>
      <p className="form-item">
        <label>Username: </label>
        <input
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
          name="password"
          value={formData.password}
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