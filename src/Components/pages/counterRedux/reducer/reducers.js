import { combineReducers } from 'redux'
import { PLUS, MINUS } from '../actions/action.js'


const initialData = {
    value: 0
}

function calculator(state = initialData, action) {
    switch (action.type) {
        case PLUS:
            console.log(state);
            console.log("++");
            return  {
                value: state.value + action.num
            }
        case MINUS:
            console.log("--");
            return Object.assign({}, state, {
                value: state.value - action.num
            });
        default:
            return state;
    }
}

const calculatorApp = combineReducers({
    calculator
});

export default calculator;