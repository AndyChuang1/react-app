import React, { Component } from 'react';
import TodoList from './todoList';
import TodoAdd from './todoAdd';

const todos = [
    {
        task: 'Install packages',
        isCompleted: false
    },
    {
        task: 'Add webpack.config.js',
        isCompleted: false
    },
    {
        task: 'Break UI into components',
        isCompleted: false
    }
];
class todoapp extends Component {
    constructor(props) {
        super(props);

        this.state = {

            todos :todos
        }
        this.saveTask = this.saveTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }

    render() {
        return (
            <div>
                
                <h1>React Todo List</h1>
                <TodoAdd addTask={this.addTask} />
                <TodoList todos={this.state.todos} saveTask={this.saveTask} deleteTask={this.deleteTask} completeTask={this.completeTask}  />
            </div>
        );
    }

    saveTask(idx, val)  {
        // copy array
        let newTodos = [...this.state.todos];
        
        // copy object
        newTodos[idx] = Object.assign({}, newTodos[idx], { task: val });
        
        this.setState({ todos: newTodos });
    }

    addTask(val) {
        // 一樣不能直接修改state
        let newTodos = [...this.state.todos];
        newTodos.push(
            {
                task: val,
                isCompleted: false
            });
        this.setState({ todos: newTodos });
    }

    deleteTask(idx) {
        let newTodos = [...this.state.todos];
        newTodos.splice(idx, 1);
        this.setState({ todos: newTodos });
        console.log(newTodos);
    }

    completeTask(idx) {
        let newTodos = [...this.state.todos];
        newTodos[idx] = Object.assign({}, newTodos[idx], { isCompleted: !newTodos[idx].isCompleted });
        this.setState({ todos: newTodos });
       
    }

    //test() {
    //    const result = todos
    //    result[0] = Object.assign({}, todos[0], { task: "I changed" })
    //    console.log(result)
    //    console.log(todos)
        
    //}
}

export default todoapp;