// src/store/example/index.js

// Example types
const ADD_EXAMPLE = "ADD_EXAMPLE"
const UPDATE_EXAMPLE = "UPDATE_EXAMPLE"
const REMOVE_EXAMPLE = "REMOVE_EXAMPLE"
const GET_EXAMPLES = "GET_EXAMPLES"

const SET_ERRORS = "SET_ERRORS"
const CLEAR_ERRORS = "CLEAR_ERRORS"


// Example action creators
export const getExamples = () => (dispatch) => {
  // async call to an api
  console.log('in getExamples thunk')

  dispatch({
    type: GET_EXAMPLES,
    payload: []
  })
}

export const addExample = (example) => ({
  type: ADD_EXAMPLE,
  example
})

export const updateExample = (example) => ({
  type: UPDATE_EXAMPLE,
  example
})

export const removeExample = (id) => ({
  type: REMOVE_EXAMPLE,
  id
})


// Example reducer
const initialState = {
  examples: [
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
  errors: null
}

export default (
  state=initialState,
  action
) => {
  switch(action.type) {
    case GET_EXAMPLES:
      return {
        ...state,
        examples: action.examples,
        loading: false,
        errors: null
      }
    case ADD_EXAMPLE:
      return {
        ...state,
        examples: [
          ...state.examples,
          action.example
        ]
      }
    case UPDATE_EXAMPLE:
      let newExamples = state.examples.map(example => {
        if(example.id === action.example.id)
          example = action.example
        return example;
      })
      return {
        ...state,
        examples: newExamples
      }
    case REMOVE_EXAMPLE:
      return {
        ...state,
        examples: state.examples.filter(example => example.id !== action.id)
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