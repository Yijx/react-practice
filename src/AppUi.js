import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css'
import './App.css'

// 一个ui组件,可以构建为一个无状态组件(类组件只有render函数,可以用用函数表示)

let AppUi = (props) => {
  return (
    <Fragment>
      <label htmlFor="input">输入内容</label>
      <Input 
        type="text" 
        id="input" 
        value={ props.inputValue } 
        onChange={ props.changeValue } 
        style={{ width: 200, marginRight: '10px'}}
      />
      <Button onClick={ props.submit } type="primary">确定</Button>
      <List
        style={{ width: 300 }}
        bordered
        dataSource={ props.list }
        renderItem={ (item, index) => (<List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>)}
      />
    </Fragment>
  )
}

export default AppUi