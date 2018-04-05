import React, { Component } from 'react'
import anime from 'animejs'

class SearchInput extends Component {
  constructor(props) {
    super(props)

    this.label = React.createRef()
    this.input = React.createRef()
    this.state = { hasInput: false }
  }

  animateUp = (node) => {
    anime({
      targets: node,
      color: '#FFF',
      opacity: 1,
      translateY: '-4.8rem',
      scale: .6,
      duration: 650,
      elasticity: 250
    })
  }

  animateDown = (node) => {
    anime({
      targets: node,
      color: '#000',
      opacity: .5,
      translateY: 0,
      scale: 1,
      duration: 500,
      elasticity: 280
    })
  }
  
  onFocus = () => {
    if(this.props.value === '') {
      this.animateUp(this.label.current)
      this.setState({ hasInput: true })
    }
    return null
  }

  onBlur = () => {
    if(this.props.value === '') {
      this.animateDown(this.label.current)
      this.setState({ hasInput: false })
    }
    return null
  }

  handleLabelClick = () => {
    this.input.current.focus()
  }
  
  render() {
    return (
      <form className="search-input" onSubmit={this.props.onSubmit}>
        <label
          ref={this.label}
          className="search-input__label"
          onClick={this.handleLabelClick}
        >
          Where are you?
        </label>
        <input
          ref={this.input}
          type="text"
          className="search-input__input"
          value={this.props.value}
          onChange={this.props.onChange} 
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </form>
    )
  }
}

export default SearchInput
