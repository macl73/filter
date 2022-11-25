import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar.js';
import ProjectList from './ProjectList.js';

class Portfolio extends React.Component {
    static propTypes = {
        filters: PropTypes.array,
        selected: PropTypes.string,
        onSelectFilter: PropTypes.func,
        data: PropTypes.array
    };

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {selected: "All"};
    }

    handleSelect(filter) {
        this.setState({selected: filter});
    }

    render() {
        const {data} = this.props;
        const {filters} = this.props;

        return (
            <div className="main-content">
                <Toolbar  
                    filters={filters} 
                    selected={this.state.selected}
                    onSelectFilter={filter => this.handleSelect(filter)} />
                <ProjectList  data={data} 
                    selected={this.state.selected} />
            </div>
        );
    };
};

export default Portfolio;