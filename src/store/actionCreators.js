import { CHANGE_VALUE, CHANGE_LIST, DELETE_VALUE, INIT_LIST} from './actionTypes'
import axios from 'axios'

export let deleteValue = (value) => ({
  type: DELETE_VALUE,
  value
})

export let changeList = (list) => ({
  type: CHANGE_LIST,
  value: {
    list,
    inputValue: ''
  }
})

export let changeValue = (value) => ({
  type: CHANGE_VALUE,
  value
})

export let initList = (value) => ({
  type: INIT_LIST,
  value
})

export let asyncInitList = () => {
  return (dispatch) => {
    axios.get('/list').then((res) => {
      let { data } = res
      dispatch(initList(data))
    }).catch(err => {
      dispatch(initList(['yjx']))
    })
  }
}
