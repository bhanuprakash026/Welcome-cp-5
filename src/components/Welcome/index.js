// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribed = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  authButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return (
        <button className="btn" type="button" onClick={this.onSubscribed}>
          Subscribed
        </button>
      )
    }
    return (
      <button type="button" className="btn" onClick={this.onSubscribe}>
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="header">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {this.authButton()}
      </div>
    )
  }
}
export default Welcome
