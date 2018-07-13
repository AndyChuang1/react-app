import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './Components/pages/home/App';
import SayHi from './Components/pages/sayhi/SayHi';
import Card from './Components/pages/nameCards/nameCard'
import Clock from './Components/pages/clock/Clock'
import Calculator from './Components/pages/calculator/Calculator'
import TodoApp from './Components/pages/TodoList/todoApp'
import TodoRedux from './Components/pages/TodoListRudux/todoContainer'
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Components/store/rootReducer.js';
import CounterApp from "./Components/pages/counterRedux/counterApp";
import Counter from "./Components/pages/counter/Counter"

let store = createStore(rootReducer);
console.log(store);



const me = {
    contents: [
        {
            title:"React",
            status: "Im Andy",
            state: "Im Mandy"
        },
        {
            title: "Hard",
            status: "Im trying to learn react",
            state: "Im understand basic react"
        },
        {
            title: "Ya!!",
            status: "I feel react is harder than Vue.",
            state: "Arrow function need to understand"
        }

    ]
}

//const name = 'Im JSX~~!!';
//const element = <h1>Hello, {name}</h1>;

//ReactDOM.render(
//    element,
//    document.getElementById('JSX')
//);

//function tick() {
//    const element = (
//        <div>
//            <h2>It is {new Date().toLocaleTimeString()}.</h2>
//        </div>
//    );
//    ReactDOM.render(element, document.getElementById('tick'));
//}

//setInterval(tick, 1000);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light  bg-light">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link className="nav-link" to="/SayHi">SayHi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Card">Card</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Clock">Clock</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Calculator">Calculator</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/TodoList">TodoList</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/TodoListRedux">TodoListRedux</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Counter">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/CounterRedux">CounterRedux</Link>
                        </li>

                       
                    </ul>
                </nav>


                <Route exact path="/" component={App} />
                <Route path="/SayHi" component={(props) => <SayHi name="AAA" />} />
                <Route path="/Card" component={(props) => <Card name='Andy' contents={me.contents} />} />
                <Route path="/Clock" component={Clock} />
                <Route path="/Calculator" component={Calculator} />
                <Route path="/TodoList" component={TodoApp} />
                <Route path="/TodoListRedux" component={TodoRedux} />
                <Route path="/Counter" component={Counter} />
                <Route path="/CounterRedux" component={CounterApp} />
                
            </div>
    </Router>
    </Provider >, document.getElementById('root'));


//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<SayHi name="Andy" />, document.getElementById('root2'))
//ReactDOM.render(<Card name='Andy' contents={me.contents} />, document.getElementById('namecard'));
//ReactDOM.render(<Clock />, document.getElementById('clock'));

//ReactDOM.render(<Calculator />, document.getElementById('calculator'));


registerServiceWorker();
