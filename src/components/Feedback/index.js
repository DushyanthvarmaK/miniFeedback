// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  feedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1>How satisfied are you with our customer support performance</h1>
        <ul>
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button" onClick={this.onClickEmoji}>
                <img alt={emoji.name} src={emoji.imageUrl} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {isFeedbackSelected ? this.thankyouScreen() : this.feedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
