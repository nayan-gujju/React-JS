import React, { Component } from 'react';

// class App extends Component {
//     state = {
//         name:`"abc"`,
//         roll: this.props.roll
//     }
//     render() {
//         return (
//             <div>
//                 <h1>NAME IS {this.state.name}</h1>
//                 <h1>ROLL NO. :- {this.state.roll}</h1>
//             </div>
//         )
//     }
// } // this is state in class 

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "Abc",
            roll: this.props.roll                
        }
    }
    render() {
        return (
            <div>
                <h1>NAME IS {this.state.name}</h1>
                <h1>ROLL NO. :- {this.state.roll}</h1>
            </div>
        )
    }
} // this is inside the constructor

export default App;
