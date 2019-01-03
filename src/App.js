/* eslint-disable react/no-danger-with-children */
import React, { Component, Fragment } from 'react';
import Item from './components/item'
import { CSSTransition } from 'react-transition-group'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    // 构造函数是唯一能够初始化 this.state 的地方
    this.state = {
      inputValue: '',
      list: [1, 2, 3],
      show: true
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
  changeValue = () => {
    let inputValue = this.input.value
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
      let props = {
        content: item,
        index,
        deleteItem: this.deleteItem,
        key: index
      }
      return (<Item {...props}/>)
    })
  }
  togger = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }
  render() {
    let props = {
      in: this.state.show,
      timeout: 1000, // 动画执行时长
      classNames: 'fade', // css前缀
      unmountOnExit: true, // 消失时移除组件
      onEntered: (el) => el.style.color = 'red',
      appera: true, // 
    }
    return (
      <Fragment>
        <button onClick={ this.togger }>togger</button>
        <CSSTransition {...props}>
          <div>
            <label htmlFor="input">输入内容</label>
            <input type="text" id="input" value={ this.state.inputValue } onChange={ this.changeValue } ref={ (input) => this.input = input }/>
            <button onClick={ this.submit }>确定</button>
            { this.getItem() }
          </div>
        </CSSTransition>
      </Fragment>
    );
  }
}

export default App;
