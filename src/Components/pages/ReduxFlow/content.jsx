import React, { Component } from 'react'
import ThemeSwitch from './ThemeSwitch'
import { connect } from 'react-redux';
import { changecolor } from './Action/action'

class Content extends Component {
    render() {
        const { themeColor} = this.props;
        return (
            <div>
                <p style={{ color: themeColor }}>React.js content</p>
                <ThemeSwitch/>
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






export default connect(
    mapStateToProps
)(Content);

