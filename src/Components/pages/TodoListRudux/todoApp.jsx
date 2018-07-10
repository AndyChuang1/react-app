import React, { Component } from 'react';
import TodoList from './todoList';
import TodoAdd from './todoAdd';
import * as TodoActions from './actions/todoAction'
import FilterContainer from './filterContainer'


class todoapp extends Component {
    

    render() {
        const { filter,todos, todosActions } = this.props;
        return (
            <div>
                
                <h1>React Todo List</h1>
                <TodoAdd addTask={todosActions.addTask} />
                <FilterContainer />
                <TodoList todos={todos} filter={filter} saveTask={todosActions.editTask} deleteTask={todosActions.deleteTask} completeTask={todosActions.completeTask}  />
            </div>
        );
    }

}

export default todoapp;