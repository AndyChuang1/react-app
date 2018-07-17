import { combineReducers } from 'redux'
import { filter, todos } from '../pages/TodoListRudux/reducer/todoReducer'
import calculator from '../pages/counterRedux/reducer/reducers'
import { themeReducer } from '../pages/ReduxFlow/Reducer/ReduxFlowRuducer'
const rootReducer = combineReducers({
    calculator,
    filter,
    todos,
    themeReducer
});

export default rootReducer;