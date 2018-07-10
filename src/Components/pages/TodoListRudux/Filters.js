
import React, { Component } from 'react';


class Filter extends Component {
    render() {
        const { filter, setFilter } = this.props;
        return (
            <div className="filter">
                <button
                    onClick={() => setFilter('SHOW_ALL')}
                    disabled={filter === 'SHOW_ALL'}
                >All</button>
                <button
                    onClick={() => setFilter('SHOW_COMPLETED')}
                    disabled={filter === 'SHOW_COMPLETED'}
                >Completed</button>
                <button
                    onClick={() => setFilter('SHOW_UNCOMPLETED')}
                    disabled={filter === 'SHOW_UNCOMPLETED'}
                >Uncompleted</button>
            </div>
        );
    }
}

export default Filter;


