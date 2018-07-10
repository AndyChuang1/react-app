import { connect } from 'react-redux';
import CounterBoard from '../counter.js'
import { add, sub } from '../actions/action.js'


const mapStateToProps = (state) => {
    return {
        value: state.calculator.value
        
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        onClickAdd: () => {
            dispatch(add());
            },
        onClickSub: () => {
            dispatch(sub());
        }
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterBoard);
