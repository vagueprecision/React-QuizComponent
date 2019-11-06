import React, { Component } from 'react'

class QuizEnd extends Component {
  constructor(props) {
    super(props)
    this.state = { quiz_position: 1 }
  }

  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
          <a href='' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
        </div>
  )}

  handleResetClick() {
    this.props.resetClick()
  }
}

export default QuizEnd
