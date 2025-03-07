import React from 'react' 

class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0
  }

  handleClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked + 1
    }))
  }

  render() { 
    return (
      <button onClick={this.handleClick}>
        {this.state.timesClicked}
      </button>
    )
  }
}
export default DigitalClicker
