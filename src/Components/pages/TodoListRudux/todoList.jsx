import React, { Component } from 'react';
import TodoItem from './todoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        //this.renderItem = this.renderItem.bind(this);
}

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItem()}
                </tbody>
            </table>
        );
    }

    renderItem() {

        const { todos, filter, saveTask, deleteTask, completeTask } = this.props;
      
        return todos.map(function (listInfo, index) {
            if (filter === 'SHOW_ALL' ||
                (filter === 'SHOW_COMPLETED' && listInfo.isCompleted) ||
                (filter === 'SHOW_UNCOMPLETED' && !listInfo.isCompleted)) {
            return (
                <TodoItem key={index} todo={listInfo} idx={index} saveTask={saveTask} deleteTask={deleteTask} completeTask={completeTask} />

                )
            }
        })
    ;

    }

}

export default TodoList;