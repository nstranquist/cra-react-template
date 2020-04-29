// src/store/example/index.js

// Example types
const ADD_ITEM = "ADD_ITEM"
const UPDATE_ITEM = "UPDATE_ITEM"
const REMOVE_ITEM = "REMOVE_ITEM"
const GET_ITEMS = "GET_ITEMS"

const SET_ACTIVE_ID = "SET_ACTIVE_ID"
const CLEAR_ACTIVE_ID = "CLEAR_ACTIVE_ID"

const SET_ERRORS = "SET_ERRORS"
const CLEAR_ERRORS = "CLEAR_ERRORS"


// Example action creators
export const getItems = () => (dispatch) => {
  // async call to an api
  console.log('in getItems thunk')

  dispatch({
    type: GET_ITEMS,
    payload: []
  })
}

export const addItem = (item) => ({
  type: ADD_ITEM,
  item
})

export const updateItem = (item) => ({
  type: UPDATE_ITEM,
  item
})

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id
})

export const setActiveId = id => ({
  type: SET_ACTIVE_ID,
  id
})

export const clearActiveId = () => ({ type: SET_ACTIVE_ID })


// Example reducer
const initialState = {
  items: [
    {
      id: "dljkfdjsf",
      title: "First Item",
      desc: "An example description"
    },
    {
      id: "lkjsdfklj",
      title: "Second Item",
      desc: "An example description"
    },
    {
      id: "sbkjhlkds",
      title: "Third Item",
      desc: "An example description"
    },
  ],
  loading: false,
  errors: null,
  activeId: undefined
}

export default (
  state=initialState,
  action
) => {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.items,
        loading: false,
        errors: null
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.item
        ]
      }
    case UPDATE_ITEM:
      let newItems = state.items.map(item => {
        if(item.id === action.item.id)
          item = action.item
        return item;
      })
      return {
        ...state,
        items: newItems,
      }
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      }
    case SET_ACTIVE_ID:
      return {
        ...state,
        activeId: action.id
      }
    case CLEAR_ACTIVE_ID:
      return {
        ...state,
        activeId: undefined
      }
    case SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
        loading: false
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null
      }
    default:
      return state;
  }
}