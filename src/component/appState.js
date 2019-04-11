import { observable, action, decorate } from "mobx";


class AppState {
  showFeedbackForm = false


  toggleFeedbackForm = () => {
    console.log('showFeedbackForm')
    this.showFeedbackForm = "false"
  }
}

decorate(AppState, {
  showFeedbackForm: observable,
  toggleFeedbackForm: action
})

const appState = new AppState()
export default appState