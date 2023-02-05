import React, { Component } from "react";
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component{
    constructor(props) {
        super(props)

        this.state = {
            name: 'Nidhi'
        }
        console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate');
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("lifecycleA getSnapshotBeforeUpdate");
        return null
    }
    changeState = () => {
        this.setState({
            name: 'Project'
        })
    }
    render(){
        console.log('LifecycleA render');
        return(
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change state</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA