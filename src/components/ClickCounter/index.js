// Write your code here

import {Component} from 'react'
import './index.css'

class clickCounter extends Component {
  state = {count: 0}

  onCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="head">
          The Button has been clicked <span className="count">{count}</span>
          times
        </h1>
        <p className="par">Click the button to increase the count!</p>
        <button type="button" className="btn" onClick={this.onCount}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default clickCounter
