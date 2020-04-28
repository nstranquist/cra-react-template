import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
// import components
import { UserForm } from '../../components/forms'

export const Profile = ({
  example
}) => {
  const [profileData, setProfileData] = useState({
    username: "fake.username",
    password: "fake.password",
  })
  const [isEditing, setIsEditing] = useState(false)

  const onHandleSubmit = (newProfileData) => {
    console.log('submitting new profile data:', profileData)

    setProfileData(newProfileData) // or call an api or redux

    setIsEditing(false)
  }

  return (
    <StyledProfile className="profile-page">
      <div className="page-container">
        <header className="page-header">
          <h3>Profile</h3>
        </header>

        <section className="section-container">
          <div className="profile-section">
            <h4>Profile Content</h4>
            <p>Username: {profileData.username}</p>
            <p>Password length: {profileData.password.length}</p>
          </div>
        </section>


        <section className="section-container">
          <div className="button-bar">
            {isEditing ? (
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            ) : (
              <button onClick={() => setIsEditing(true)}>Update Profile</button>
            )}
          </div>

          {isEditing && (
            <div className="profile-section">
              <h4 className="text-center">Update Profile</h4>
              <UserForm
                onHandleSubmit={onHandleSubmit}
              />
            </div>
          )}
        </section>
      </div>
    </StyledProfile>
  )
}

const mapStateToProps = (state) => ({
  example: state.example
})

export const ConnectedProfile = connect(
  mapStateToProps,
  {  }
)(Profile)

const StyledProfile = styled.div`

  h4 {
    font-size: 19px;
    margin-bottom: 6px;
    font-family: sans-serif;
  }
  p {
    font-size: 14px;
  }
  .section-container {
    margin-top: 6px;
    margin-bottom: 12px;
  }
  .profile-section {
    background: #f8f8f8;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 8px;
    padding-right: 8px;
  }
  .button-bar {
    margin-bottom: 16px;
  }
`
