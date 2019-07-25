import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: ["red", "blue", "purple", "orange"]
    }
  }
  handleClick() {
    let current = this.state.colors
    let future = []
    for(let i = 0; i < current.length; i++) {
      i !== 3 ? future.push(current[i]) : future.unshift(current[i])
    }
    return future
  }
  render() {
    return (
      <Column flexGrow={1} onClick={() => this.setState({colors: this.handleClick()})}>
        <Row flexGrow={1}>
          <Column flexGrow={1} style={{backgroundColor:this.state.colors[0]}}>
          </Column>
          <Column flexGrow={1} style={{backgroundColor:this.state.colors[1]}}>
          </Column>
        </Row>
        <Row flexGrow={1}>
          <Column flexGrow={1} style={{backgroundColor:this.state.colors[2]}}>
          </Column>
          <Column flexGrow={1} style={{backgroundColor:this.state.colors[3]}}>
          </Column>
        </Row>
      </Column>
    )
  }
}

export default App