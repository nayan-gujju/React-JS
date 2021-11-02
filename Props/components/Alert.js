// import React from 'react'

// function Alert(props) {
//     return (
//         <div className="container">
//             <div className="alert alert-warning alert-dismissible fade show" role="alert">
//                 {props.alert}
//                 <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//             </div>
//         </div>
//     )
// } //this is function based components 
                
import React, { Component } from 'react';

export default class Alert extends Component {
    render() {
        return (
            <div className="container-sm">
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <small className="bg"> Sum of 1 to 10:- {this.props.alert}</small>
                    {/* <small className="bg">{this.props.children}</small> */}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        )
    }
} //this is class based component
