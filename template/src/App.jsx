import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
// import components
import { Navbar } from './components/layout'
import { PageNotFound } from './components/PageNotFound'


/****
 * Describe Project:
 * 
 * - 
 * 
****/

export const App = () => {

  return (
    <StyledApp>
      {/* Other Components */}
      <Navbar />

      {/* Routes */}
      <Suspense fallback={<></>}>
        <Switch>
          <Route exact path="/" component={lazy(() => import('./pages/Home'))} />
          <Route exact path="/home" component={lazy(() => import('./pages/Home'))} />
          <Route exact path="/profile" component={lazy(() => import('./pages/Profile'))} />
          <Route exact path="/items" component={lazy(() => import('./pages/Items'))} />
          <Route exact path="/items/:itemId" component={lazy(() => import('./pages/ItemDetail'))} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </Suspense>

    </StyledApp>
  )
}

const StyledApp = styled.div`

`
