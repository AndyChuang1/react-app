import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.interval();
    }
    

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    interval() {

        setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Clock;
