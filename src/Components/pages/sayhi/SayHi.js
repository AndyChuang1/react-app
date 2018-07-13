import React, { Component } from 'react';
import './sayhi.css'

class SayHi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 0,
            status: 'Sunny',
            rainy:0
        };

    }

    componentDidMount() {
        this.getweatherAPI();
    }
    getweatherAPI() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Taipei,tw&APPID=7dad838277c0cc8fdf1a241d7c180753&units=metric', {
            method: 'GET',
            
        }).then((response) => {
            return response.json();

            }).then((Obj) => {

                let status = Obj.weather[0].main;
                let nowT = Obj.main.temp;
                this.setState({
                    temperature: nowT,
                    status: status
                })

            })

    }

    render() {
        return (
            <div>
                <h1 className='testcss'>Hi,{this.props.name} </h1>
                <h2 className='weather'>Today is {this.state.status}, {this.state.temperature} degrees</h2>
                <h2 className='weather'>Rainfall is {this.state.rainy}mm</h2>
            </div>

        );
    }
}

export default SayHi;