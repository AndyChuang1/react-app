import React, { Component } from 'react';

class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this.onAddClick = this.onAddClick.bind(this);
    }

    render() {
        return (
            <div>
                <input type="text" ref="addInput" />
                <button onClick={this.onAddClick}>Create</button>
            </div>
        );
    }

    onAddClick() {
        const addInput = this.refs.addInput;
        this.props.addTask(addInput.value);
        
        addInput.value = '';
    }
}

export default TodoAdd;