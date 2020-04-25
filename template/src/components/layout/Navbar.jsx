import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = ({
  
}) => {
  const location = useLocation()
  const [activePath, setActivePath] = useState("")

  useEffect(() => {
    const currentPath = location.pathname;

    console.log('current path:', location.pathname)

    setActivePath(currentPath)
  }, [location])

  return (
    <StyledNavbar role="navigation">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className={(activePath==="/home" || activePath==="/") ? "nav-link active" : "nav-link"}>Home</Link>
          <Link to="/items" className={activePath==="/items" ? "nav-link active" : "nav-link"}>Items</Link>
          <Link to="/items/exampleItemId" className="nav-link">ItemDetail</Link>
        </div>
        <div className="navbar-right">
          <Link to="/profile" className={activePath==="/profile" ? "nav-link active" : "nav-link"}>Profile</Link>
        </div>
      </div>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  background: #fff;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,.09);

  .navbar-container {
    padding-left: 15%;
    padding-right: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .navbar-left, .navbar-right {
      display: flex;
      align-items: center;

      .nav-link {
        display: block;
        padding: 10px 8px;
        // reset default link styles
        color: rgba(0,0,0,.9);
        text-decoration: none;
        cursor: pointer;
        font-family: 'Helvetica', sans-serif;

        &:hover {
          background: rgba(0,0,0,.12);
          transition: .1s ease;
        }

        &.active {
          font-weight: 500;
          background: rgba(0,0,0,.12);
        }

        &:active, &:focused, &:visited {
          color: rgba(0,0,0,.9);
          text-decoration: none;
        }
      }
    }
  }
`