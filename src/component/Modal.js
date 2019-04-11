import React, { Component } from 'react';
import appState from './appState';

class Modal extends Component {
  state = {
    message: ''
  }

  onClose = (e) => {
    e.preventDefault()
    appState.showFeedbackForm = false
  }

  onMessageChanged = event => {
    this.setState({ message: event.target.value })
  }

  onEnterPress = event => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      console.log('onEnterPress')
      event.preventDefault();
      this.onSubmitFeedback(event);
    }
  }

  onSubmitFeedback = event => {
    event.preventDefault()
    if (this.state.message.trim().length > 0) {
      alert(this.state.message)
      this.setState({ message: '' })
    }
  }

  render() {
    return (
      <div className="overflow-y-scroll overflow-x-hidden z-9999 flex justify-center items-center" style={backdropStyle}>
        <div style={modalStyle}>
          <div className="flex justify-between mb3 black">
            <span className="f5 b">Well Done!!</span>
            <a className="f5 fw6 no-underline orange dim:hover"
              href="/"
              onClick={this.onClose}
            >Close</a>
          </div>
          <div className="black f3">
            <h1>RATING *****</h1>
          </div>
          <div className="bg-white black-70 br0 bn mb3 mt4 flex " style={{ height: '150px' }}>
            <textarea
              className="ba br4 pa3 f5 fw2 w-100 outline-0 mb0"
              style={{ height: '100%', outlineStyle: 'none' }}
              onKeyDown={this.onEnterPress}
              autoFocus
              placeholder="Type your feedback..."
              value={this.state.message}
              onChange={this.onMessageChanged}
            />
          </div>
          <div className="black-70 w-90 br0 bn mb3 mt4 flex absolute bottom-0" style={{ height: '60px' }}>
            <a className="pt3 tc w-100 white bg-black-90 f3 fw4 br3 no-underline dim:hover" href="/" onClick={this.onSubmitFeedback}
            >SUBMIT</a>
          </div>

        </div>
      </div>
    )
  }
}
export default Modal

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)'
}

const modalStyle = {
  backgroundColor: '#fff',
  position: 'relative',
  borderRadius: 10,
  width: 600,
  minHeight: 600,
  maxHeight: 800,
  margin: '0 auto',
  padding: 30,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
}