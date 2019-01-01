import React, { Component } from 'react'

class Item extends Component {
  deleteItem = () => {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
  render () {
    return (
      <li 
        onClick={ this.deleteItem }             
        >{ this.props.content}</li>
    )
  }
}

export default Item