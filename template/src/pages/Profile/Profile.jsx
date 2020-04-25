import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
// import components
import { UserForm } from '../../components/forms'

export const Profile = ({
  example
}) => {
  const [profileData, setProfileData] = useState(undefined)

  useEffect(() => {

  }, [])

  return (
    <StyledProfile className="profile-page">
      <div className="page-container">
        <header className="page-header">
          <h3>Profile</h3>
        </header>
        <section className="section-container">
          Profile Content
        </section>
        <div className="section-container">
          <UserForm />
        </div>
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

`
