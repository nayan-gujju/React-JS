import React, { Component } from 'react'

export default class App extends Component {

    componentDidMount() {
        console.log("------------ App Mounted")
    }
    
    componentWillUnmount() {
        console.log("------------ App UnMounted")
    }

    render() {
        return (
            <div>
                <h1>App</h1>
            </div>
        )
    }
}


// in index.js write this line //ReactDOM.unmountComponentAtNode(document.getElementById('test'));