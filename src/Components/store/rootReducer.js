import { combineReducers } from 'redux'
import { filter, todos } from '../pages/TodoListRudux/reducer/todoReducer'
import calculator from '../pages/counterRedux/reducer/reducers'

const rootReducer = combineReducers({
    calculator,
    filter,
    todos
});

export default rootReducer;