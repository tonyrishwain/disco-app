import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

const colors = [
  "red",
  "blue",
  "purple",
  "orange"
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: colors
    }
  }
  handleClick(arr) {
    let last = arr[arr.length - 1]
    return [last].concat(arr.filter(item => item !== last))
  }
  render() {
    let current = this.state.colors
    return (
      <Column flexGrow={1} onClick={() => this.setState({colors: this.handleClick(current)})}>
        <Row flexGrow={1}>
          <Column flexGrow={1} style={{backgroundColor:current[0]}}>
          </Column>
          <Column flexGrow={1} style={{backgroundColor:current[1]}}>
          </Column>
        </Row>
        <Row flexGrow={1}>
          <Column flexGrow={1} style={{backgroundColor:current[3]}}>
          </Column>
          <Column flexGrow={1} style={{backgroundColor:current[2]}}>
          </Column>
        </Row>
      </Column>
    )
  }
}

export default App