import React, { Component } from "react";

class LifeCycleB extends Component{
    constructor(props) {
        super(props)

        this.state = {
            name: 'Nidhi'
        }
        console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate');
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate");
        return null
    }

    render(){
        console.log('LifecycleB render');
        return(
            <div>
                <div>LifeCycle B</div>
            </div>
        )
    }
}

export default LifeCycleB