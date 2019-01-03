import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
  deleteItem = () => {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
  // 性能优化 父组件更新时执行render子组件同样执行父组件的操作
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content === this.props.content) {
      return false
    }
  }
  render () {
    return (
      <li 
        onClick={ this.deleteItem }             
        >{ this.props.content + this.props.test }</li>
    )
  }
}

Item.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

Item.defaultProps = {
  test: 'hello'
}

export default Item