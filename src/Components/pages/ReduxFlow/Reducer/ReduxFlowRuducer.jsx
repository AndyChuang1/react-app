import { combineReducers } from 'redux'
import { CHANGE } from '../Action/action'


const initialColor = {
    themeColor: 'black'
}


export function themeReducer(state = initialColor, action) {
    switch (action.type) {
        case CHANGE:
            console.log(state);
            return {
                themeColor: action.themeColor
            }
      
        default:
            return state;
    }
}