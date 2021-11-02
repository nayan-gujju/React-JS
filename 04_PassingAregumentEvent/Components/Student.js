import React, { Component } from 'react';

export class Student extends Component {
    state = {
        id:101,
        name: "Student"
    }

    handleClick = (id, e) => {
        console.log("[][][][][]", e);
        console.log(id);
        this.setState({name:"NA"});
    } 
    render() {
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                {/* <button onClick={(e) => {this.handleClick(this.state.id,e)}}>Delete</button> */}
                <button onClick={this.handleClick.bind(this, this.state.id)}>Delete</button> 
            </div>
        )
    }
}

export default Student