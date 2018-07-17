import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changecolor } from './Action/action'

class Header extends Component {
    render() {
        const { themeColor } = this.props; 
        
        return (
            <h1 style={{ color: themeColor }}>This is Redux flow Headergg</h1>
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
)(Header);

