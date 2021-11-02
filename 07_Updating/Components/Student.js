import React, { Component } from 'react'
import Mark from './Mark';

export default class Student extends Component {
    constructor(props){
        super(props);
        this.state = {
            roll:101
        }
    }

    handleClick = () => {
        console.log("button clicked");
        this.setState({roll:this.state.roll + 1 });
    }

    render() {
        console.log("Student---------rendered")
        return (
            <div>
                <Mark roll={this.state.roll}/>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
