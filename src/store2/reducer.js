import { combineReducers } from 'redux'

let valueReducer = (state = 'Yijx', action) => {
  let newValue = state
  let { type, value } = action
  switch(type) {
    case 'CHANGE_VALUE':
      newValue = value
      break
    default:
  }
  return newValue
}

let listReducer = (state = ['yjx'], action) => {
  let newList = [...state]
  let { type, value } = action
  switch(type) {
    case 'DELETE_ITEM':
      newList.splice(value, 1)
      break
    case 'ADD_ITEM':
      newList.push(value)
      break
    default: 
  }
  return newList
}

export default combineReducers({
  list: listReducer,
  inputValue: valueReducer
}) 