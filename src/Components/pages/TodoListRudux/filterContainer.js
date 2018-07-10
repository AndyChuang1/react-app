// JavaScript source code
import Filter from './Filters';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFilter } from './actions/todoAction';


const mapStateToProps = (state) => {
    return {
        
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (filter) => {
            dispatch(setFilter(filter));
        }
    }
}

const filterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);


export default filterContainer;