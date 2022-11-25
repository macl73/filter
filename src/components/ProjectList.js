import React from 'react';
import PropTypes from 'prop-types';

function ProjectList(props) {
    const {data} = props;
    const {selected} = props;

    const styles = {
        margin: "10px",
        display: "inline-block"
    };

    function selection(arr) {
        if (selected === "All") {
          return arr;
        } else {
          return arr.filter(item => item.category === selected);
        };
      };

    function images(arr) {
        return selection(arr).map(elem => <div key={arr.indexOf(elem)} style={styles}><img src={elem.img} alt={elem.category}/></div>);
    };

    return (
        <div className="project-list">
            {images(data)}
        </div>
    );
};

ProjectList.propTypes = {
    data: PropTypes.array,
    selected: PropTypes.string,
};

export default ProjectList;