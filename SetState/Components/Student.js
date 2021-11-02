import React, { Component } from 'react'

export class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'abcd',
            roll: this.props.roll
        }
    }

    // handleClick = () => {
    //     console.log("Button Clicked...", this);
    //     console.log(this.state.roll)
    //     var a = this.state.roll
    //     a += 1;
    //     console.log(a)
    //     this.setState({roll:a});
    // }
    
    handleClick = () => {
        console.log("Button Clicked...", this);
        console.log(this.state.roll)
        var a = this.state.roll
        a += 1;
        console.log(a)
        this.setState((state, props) => {
            console.log("[][][][][][][]][]]][][][][][][][][][][][][][]",props.name);
        });
    }
    render() {
        return (    
            <div>
                <h1>hello {this.state.name}</h1>
                <h1>Roll No  {this.state.roll}</h1>
                <button onClick={this.handleClick} >Click Me</button>
            </div>
        )
    }
}

export default Student
