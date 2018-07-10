import React, { Component } from 'react';

class SayHi extends React.Component {
    render() {
        return <h1>Hi,{this.props.name} </h1>;
    }
}

export default SayHi;