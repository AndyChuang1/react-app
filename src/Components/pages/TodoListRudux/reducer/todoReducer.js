import { combineReducers } from 'redux'
import { ADD_TASK, EDIT_TASK, COMPLETE_TASK, DELETE_TASK } from '../actions/todoAction'

export function filter(state = "SHOW_ALL", action) {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter;

        default:
            return state;
    }
}

const inttodos = [
    {
        task: 'Start Redux',
        isCompleted: false
    },
    {
        task: 'Define action and reducer',
        isCompleted: false
    },
    {
        task: 'Container combine state and prop to components which you want',
        isCompleted: false
    }
];
export function todos(state = inttodos, action) {
    switch (action.type) {
        case ADD_TASK:
            console.log(state);
            return [
                ...state,
                {
                    task: action.task,
                    isCompleted: false
                }
            ];
        case COMPLETE_TASK:
            return [
                ...state.slice(0, action.idx),
                Object.assign({}, state[action.idx], {

                    isCompleted: !state[action.idx].isCompleted
                }),
                ...state.slice(action.idx + 1)


            ];
        case EDIT_TASK:
            return [
                ...state.slice(0, action.idx),
                Object.assign({}, state[action.idx], {
                    task: action.task
                }),
                ...state.slice(action.idx + 1)
            ];
        case DELETE_TASK:
            return [
                ...state.slice(0, action.idx),
                ...state.slice(action.idx + 1)

            ];
        default:
            return state;
    }
}
const todoAppReducer = combineReducers({

    filter,
    todos


});

export default todoAppReducer;
