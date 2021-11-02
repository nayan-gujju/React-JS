// import React, { Component } from 'react';

// export class Students extends Component {
//     constructor(props){
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick = () => {
//         console.log("Button Clicked..", this);
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Hello Event </h1>
//                 <button onClick={this.handleClick}>Click Me</button>
//             </div>
//         )
//     }
// } // event in class based components

// export default Students;


import React from 'react';

export default function Students() {
    // const handleClick = () => {
    //     console.log("Button Clicked... ", this);
    // }
    const handleClick = (e) => {
        e.preventDefault();
        console.log("Button Clicked... ", this);
    }

    return (
        <div>
            <h1>Hello Event </h1>
            {/* <button onClick={handleClick}>Click Me</button> */}
            <a href="http://www.google.com" onClick={handleClick}>Click me</a>
        </div>
    )
} // event in function based components


