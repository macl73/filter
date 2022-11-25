import React from 'react';
import PropTypes from 'prop-types';

function Toolbar(props) {
    const {filters} = props;
    const {selected} = props;
    const {onSelectFilter} = props;

    return (
        <nav className="toolbar">
            <ul className="toolbar-list">
                {filters.map((filter, index) => {
                    return (
                        <li className="toolbar-list-item" key={index}>
                            <button className={filter === selected ? "toolbar-btn active" : "toolbar-btn"}
                            onClick={() => onSelectFilter(filter)}>
                                {filter}
                            </button>
                        </li>
                    );
                })};
            </ul>
        </nav>
    );
};

Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func
};

export default Toolbar;