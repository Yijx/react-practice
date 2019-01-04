/* eslint-disable react/no-danger-with-children */
import React, { Component, Fragment } from 'react';
// import Item from './components/item'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Input, Button, List } from 'antd';
import { CHANGE_VALUE, CHANGE_LIST, DELETE_VALUE} from './store/actionTypes'
import 'antd/dist/antd.css'
import './App.css'

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
  handleStoreChange = () => {
    this.setState(store.getState())
  }
  deleteItem = (index) => {
    store.dispatch({
      type: DELETE_VALUE,
      value: index
    })
    // this.setState((prevState) => {
    //   let list = [...prevState.list]
    //   list.splice(index, 1)
    //   return {
    //     list
    //   }
    // })
  }
  changeValue = (e) => {
    let value = e.target.value
    store.dispatch({
      type: CHANGE_VALUE,
      value
    })
    // this.setState(() => ({
    //   inputValue
    // }))
  }
  submit = () => {
    let list = [...this.state.list, this.state.inputValue]
    store.dispatch({
      type: CHANGE_LIST,
      value: {
        list,
        inputValue: ''
      }
    })
    // prevState 上一次输入的值
    // this.setState((prevState) => ({
    //   inputValue: '',
    //   list: [...prevState.list, prevState.inputValue]
    // }))
  }
  getItem = () => {
    return <List
      style={{ width: 300 }}
      bordered
      dataSource={ this.state.list }
      renderItem={ (item, index) => (<List.Item onClick={(e) => this.deleteItem(index)}>{item}</List.Item>)}
    />
    // return  this.state.list.map((item, index) => {
    //   let props = {
    //     // in: this.state.show, 
    //     timeout: 1000, // 动画执行时长
    //     classNames: 'fade', // css前缀
    //     unmountOnExit: true, // 消失时移除组件
    //     onEntered: (el) => el.style.color = 'red',
    //     appear: true, // 第一次显示时就渲染
    //     key: index
    //   }
    //   let propsItem = {
    //     content: item,
    //     index,
    //     deleteItem: this.deleteItem
    //   }
    //   return (
    //     <CSSTransition {...props}>
    //       <Item {...propsItem}/>
    //     </CSSTransition>
    //   )
    // })
  }
  render() {
    return (
      <Fragment>
        {/* <button onClick={ this.togger }>togger</button> */}
        <label htmlFor="input">输入内容</label>
        <Input type="text" id="input" value={ this.state.inputValue } onChange={ this.changeValue } style={{ width: 200, marginRight: '10px'}}/>
        <Button onClick={ this.submit } type="primary">确定</Button>
        {/* <TransitionGroup> */}
          { this.getItem() }
        {/* </TransitionGroup> */}
      </Fragment>
    );
  }
}

export default App;
