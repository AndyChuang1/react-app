import React from 'react';


//const Condition = (props) => (props.length >= 200) ? <p> You can be a basketball player</p> : <p> You can be a football player</p>
const scaleName = {
    cm: 'Centermeter',
    m: 'Meter'
}

class Input extends React.Component {
    constructor(props) {
        super(props)
        //this.state = {
        //    length: ""
        //}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        //this.setState({ length: e.target.value });
        this.props.onLengthChange(e.target.value);
        console.log(e.target.value);
    }

    render() {
        const length = this.props.length;
        return (
            <div>
                <fieldset>
                    <legend>{scaleName[this.props.scale]}</legend>
                    <input type="text" value={length} onChange={this.handleChange} />
                </fieldset>
            </div>

        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            length: "",
            scale: "cm"

        }
        this.handleCentermeterChange = this.handleCentermeterChange.bind(this);
        this.handleMeterChange = this.handleMeterChange.bind(this);    
    }

    handleCentermeterChange(len) {
        this.setState({ length: len, scale: 'cm' });
    }

    handleMeterChange(len) {
        this.setState({ length: len, scale: 'm' });
        
    }


    render() {

        const scale = this.state.scale;
        const length = this.state.length;

        const centermeter =
            scale === 'm' ? doConvert(length, toCentermeter) : length;

        const meter =
            scale === 'cm' ? doConvert(length, toMeter) : length;

        return (
            <div>
                <Input scale='cm' length={centermeter} onLengthChange={this.handleCentermeterChange} />
                <br />
                <Input scale='m' length={meter} onLengthChange={this.handleMeterChange} />
            </div>
            
            );
    }

}

function toMeter(cm) {
    return cm / 100;
}

function toCentermeter(m) {
    return m * 100;
}
function doConvert(unit, convert) {
    const input = parseFloat(unit);
    if (isNaN(input))
        return '';
    const output = convert(input);
    return output.toString();
}

export default Calculator;