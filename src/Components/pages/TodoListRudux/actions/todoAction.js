
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

export const SET_FILTER = 'SET_FILTER';

//function cube(x) {
//    return x * x * x;
//}
//const foo = Math.PI + Math.SQRT2;
//export { cube, foo };   //使用這種方式export 好像比較整齊

export function addTask(task) {

    return {

        type: ADD_TASK,
        task

    }

}

export function editTask(idx, task) {

    return {

        type: EDIT_TASK,
        idx,
        task
    }
}


export function deleteTask(idx) {

    return {

        type: DELETE_TASK,
        idx
    }
}

export function completeTask(idx) {

    return {

        type: COMPLETE_TASK,
        idx
    }
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    };
}