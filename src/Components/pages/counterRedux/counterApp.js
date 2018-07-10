import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import CounterBoard from './counter.js';

import Container from './containers/container';

const counterApp = () => (
    <div>
        <Container />
    </div>
)
export default counterApp;