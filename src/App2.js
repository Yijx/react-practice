import React, { Fragment } from 'react'
import { Button, Input, List } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import * as actionCreators from './store2/actionCreators'
import { bindActionCreators } from 'redux'

let App2 = (props) => {
  let { inputValue, changeValue, addItem, list, deleteItem } = props

  return (
    <Fragment>
      <label htmlFor="input">输入</label>
      <Input
        style={{ width: 200, marginRight: '10px'}}
        value={ inputValue }
        onChange={ (e) => changeValue(e.target.value) }
      />
      <Button
        type="primary"
        onClick={ () => addItem(inputValue) }
      >确定</Button>
      <List
        style={{ width: 300 }}
        bordered
        dataSource={ list }
        renderItem={ (item, index) => (<List.Item onClick={() => deleteItem(index)}>{item}</List.Item>)} 
      />
    </Fragment>
  )
}

let mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// mapDispatchToProps参数写法1： 传入一个函数，函数第一个参数为dispatch方法，返回一个对象，对象中的方法会注入到组件的props中
let mapDispatchToProps = (dispatch) => {
  return {
    changeValue(e) {
      let value = typeof e === 'string' ? e : e.target.value
      dispatch(actionCreators.changeValue(value))
    },
    addItem(value) {
      dispatch(actionCreators.addItem(value))
    },
    deleteItem(index) {
      dispatch(actionCreators.deleteItem(index))
    }
  }
}

// mapDispatchToProps参数写法2： 传入一个对象，对象的各个项是actionCreators即各个action函数，这些方法会注入到组件的props中同时会自动dispatch
// export default connect(mapStateToProps, actionCreators)(App2)

// mapDispatchToProps参数写法3： 传入一个函数，返回一个对象，该对象可以自由组合，其值是bindActionCreators(actionCreators, dispatch)，即手动把dispatch注入到actionCreators中
// let mapDispatchToProps2 = (dispatch) => {
//   return {
//     actions: bindActionCreators(actionCreators, dispatch)
//   }
// }
export default connect(mapStateToProps, mapDispatchToProps)(App2)