import React, { Component } from 'react'

export default class Mark extends Component {
    constructor(props){
        super(props);
        this.state = {
            mroll:this.props.roll
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("/////////////////////getDerivedStateFromProps");
        console.log(props, state);
        
        if (props.roll !== state.roll){
            return{ mroll: props.roll };
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        if (this.state.mroll < 105){
            console.log("-----------------");
            console.log(nextProps, nextState);
            return true;
        }
        console.log("-----------------");
        console.log(nextProps, nextState);
        return false;
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log("mark------------getSnapshotBeforeUpdate----------run");
        console.log("*********************", prevProps, prevState);
    }
    
    componentDidMount(prevProps, prevState, snapShot) {
        console.log("mark------------componentDidMount----------run");
        console.log("++++++++++++++++++++", prevProps, prevState, snapShot);


    }



    render() {
        console.log("Mark------------Rendered")
        return (
            <div>
              <h1>........{this.state.mroll}</h1>  
            </div>
        )
    }
}
