import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

        this.Add = this.Add.bind(this)
        this.Sub = this.Sub.bind(this)
        
    }

    Add() {

        this.setState((prevState) => {
            return { count: prevState.count + 1 };
        });

    }

    Sub() {

        this.setState((prevState) => {
            return { count: prevState.count - 1 };
        });

    }
    render() {
        return (<div>
            <h1>{this.state.count} </h1>
            <button className="btn btn-primary mr-2" onClick={this.Add}>Add</button>
            <button className="btn btn-primary" onClick={this.Sub}>Sub</button>

        </div>)
       

    }




}

export default Counter;