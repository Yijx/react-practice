/* eslint-disable react/no-danger-with-children */
import React, { Component } from 'react';
import AppUi from './AppUi'
import { deleteValue, changeList, changeValue, asyncInitList } from './store/actionCreators'

import store from './store'

class App extends Component {
  constructor(props) {
    super(props)
    // 构造函数是唯一能够初始化 this.state 的地方
    // 从store获取定义的state
    this.state = store.getState()
    // 订阅一个方法，一旦store中state发生变化，则执行
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount() {
    store.dispatch(asyncInitList())
  }
  handleStoreChange = () => {
    this.setState(store.getState())
  }
  deleteItem = (index) => {
    store.dispatch(deleteValue(index))
  }
  changeValue = (e) => {
    let value = e.target.value
    store.dispatch(changeValue(value))
  }
  submit = () => {
    let list = [...this.state.list, this.state.inputValue]
    store.dispatch(changeList(list))
  }
  render() {
    return (
      <AppUi
      submit={ this.submit }
      deleteItem={ this.deleteItem }
      changeValue={ this.changeValue  }
      list={ this.state.list }
      inputValue={ this.state.inputValue }
      />
    );
  }
}

export default App;
