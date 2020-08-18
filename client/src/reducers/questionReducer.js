import {
  GET_QUESTIONS,
  ADD_QUESTION,
  DELETE_QUESTION,
  QUESTIONS_LOADING
} from '../action/types'

const initialState = {
  questions: [],
  loading: false
}

export default function (state = initialState, action){
  switch (action.type){
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      }
    default: 
      return {
        ...state
      }
  }
}