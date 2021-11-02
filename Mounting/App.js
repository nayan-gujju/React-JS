import React, { Component } from 'react'
import Student from './Components/Student';
export class App extends Component {
  constructor(props) {
    super(props);
    console.log("App -------- Constructor Called..");
    console.log(props.name);
    this.state = {
      roll: "101"
    }

  }

  static getDerivedStateFromProps(props, state) {
    console.log("App --------- get derived state from props called...");
    console.log("()()()()()()()()", props, state);
    return null;
  }

  componentDidMount() {
    console.log("App --------- componentDidMount ---- Mounted....")
  }
  render() {
    console.log("App -------- render called...");
    return (
      <div>
        <Student name="React"/>
      </div>
    )
  }
}

export default App
