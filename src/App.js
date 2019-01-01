/* eslint-disable react/no-danger-with-children */
import React, { Component, Fragment } from 'react';
import Item from './components/item'

class App extends Component {
  constructor(props) {
    super(props)
    // 构造函数是唯一能够初始化 this.state 的地方
    this.state = {
      inputValue: '',
      list: [1, 2, 3]
    }
  }
  componentWillMount() {
    console.log('组件将要挂载')
  }
  componentDidMount() {
    console.log('组件将已经挂载')
  }
  componentWillUnmount() {
    console.log('组件将要卸载')
  }
  deleteItem = (index) => {
    this.setState((prevState) => {
      let list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }
  changeValue = (e) => {
    let inputValue = e.target.value
    this.setState(() => ({
      inputValue
    }))
  }
  submit = () => {
    // prevState 上一次输入的值
    this.setState((prevState) => ({
      inputValue: '',
      list: [...prevState.list, prevState.inputValue]
    }))
  }
  getItem = () => {
    return  this.state.list.map((item, index) => {
      return (<Item content={ item } index={ index } deleteItem={ this.deleteItem } key={ index }/>)
    })
  }
  render() {
    return (
      <Fragment>
        <label htmlFor="input">输入内容</label>
        <input type="text" id="input" value={ this.state.inputValue } onChange={ this.changeValue }/>
        <button onClick={ this.submit }>确定</button>
        { this.getItem() }
      </Fragment>
    );
  }
}

export default App;
