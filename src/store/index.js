import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reduce from './reducer'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reduce, enhancer)

export default store
 
// getState() 获取store中数据
// dispatch(action) 向store中发送type为xxx的内容改变
// subscribe(function) state改变之后触发的监听函数
