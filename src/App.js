import React, { Component } from 'react';
import appState from './component/appState';
import Modal from './component/Modal';
import { observer } from 'mobx-react';

class App extends Component {

  renderModal = () => {
    if (appState.showFeedbackForm === true) {
      return <Modal />
    }
    return null
  }

  openModal = (e) => {
    e.preventDefault()
    console.log('Open modal')
    appState.showFeedbackForm = true
  }

  render() {
    return (
      <div className="white">
        <h1>RATING</h1>
        
        <div className="mt4">
          <a className="ba br3 pl5 pr5 pt3 pb3 f6 fw6 no-underline white dim:hover"
            style={{ borderColor: '#FCE205' }}
            href="/"
            onClick={this.openModal}
          >Rate Now!</a>
        </div>
        {this.renderModal()} 
      </div>
    );
  }
}

App = observer(App)

export default App;
