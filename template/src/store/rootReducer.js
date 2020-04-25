// src/store/rootReducer.js

import { combineReducers } from 'redux'
import ExampleReducer from './example'

export const rootReducer = combineReducers({
  example: ExampleReducer
})