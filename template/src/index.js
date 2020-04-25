// index.js

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import { configureStore } from './store/configureStore'

import './styles/reset.css'
import './styles/index.css'

// import * as serviceWorker from './serviceWorker'

const reduxStore = configureStore()


ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('react-app')
)


/*
To work offline and load fast,
uncomment the line below and the import above
*/

// serviceWorker.unregister()