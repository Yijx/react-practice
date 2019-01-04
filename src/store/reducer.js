import { CHANGE_VALUE, CHANGE_LIST, DELETE_VALUE } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

// 必须是纯函数,给固定输入有固定输出
export default (state = defaultState, action) => {
  // 不允许修改显示state
  let newState = JSON.parse(JSON.stringify(state))
  let { type, value } = action

  switch (type) {
    case CHANGE_VALUE:
      newState.inputValue = value
      break
    case CHANGE_LIST:
      newState.inputValue = value.inputValue
      newState.list = value.list
      break
    case DELETE_VALUE:
      newState.list.splice(value, 1)
      break
    default:
  }
  return newState
}