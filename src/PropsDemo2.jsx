import React, { Component } from 'react'

export default class PropsDemo2 extends Component {
  render() {
    return (
      <div>
       variable={this.props.a}
       Othername={this.props.name2}
       Employee details={this.props.details.id}
       Employee name={this.props.details.name}
        
      </div>
    )
  }
}
