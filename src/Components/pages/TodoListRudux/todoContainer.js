// JavaScript source code
import todoApp from './todoApp.jsx';
import { connect } from 'react-redux';
import { bindActionCreators, createStore  } from 'redux';
import * as TodosActions from './actions/todoAction';






const mapStateToProps = (state) => {
    return {
        todos:state.todos,
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        todosActions: bindActionCreators(TodosActions, dispatch)
    };
}

const todoContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(todoApp);


export default todoContainer;