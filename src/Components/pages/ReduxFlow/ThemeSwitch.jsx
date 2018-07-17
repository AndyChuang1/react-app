import React, { Component } from 'react'
import { changecolor } from './Action/action'
import { connect } from 'react-redux';
class ThemeSwitch extends Component {
    render() {
        const { themeColor, onSwitchColor } = this.props;
        return (
            <div>
                <button style={{ color: themeColor }} onClick={() => onSwitchColor('red')} >Red</button>
                <button style={{ color: themeColor }} onClick={() => onSwitchColor('blue')} >Blue</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        themeColor: state.themeReducer.themeColor

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch(changecolor(color))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThemeSwitch);

