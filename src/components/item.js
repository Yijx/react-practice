import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
  deleteItem = () => {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
  render () {
    return (
      <li 
        onClick={ this.deleteItem }             
        >{ this.props.content + this.props.test}</li>
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