import { createStore } from 'redux'
import reduce from './reducer'

const store = createStore(reduce, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
 
// getState() 获取store中数据
// dispatch(action) 向store中发送type为xxx的内容改变
// subscribe(function) state改变之后触发的监听函数
