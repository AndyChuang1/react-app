import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class CounterBoard extends Component {
    render() {
        const { value, onClickAdd, onClickSub } = this.props;
        return (
            <div>
                <p><h2>Count: {value}</h2></p>
                <div>
                    <button className='btn btn-primary mr-2' onClick={onClickAdd}>Increase</button>
                    <button className='btn btn-primary mr-2' onClick={onClickSub}>Decrease</button>
                </div>
            </div>
        );
    }
}


export default CounterBoard;