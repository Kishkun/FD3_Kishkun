import React from 'react';
import PropTypes from 'prop-types';

class Fragment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

Fragment.defaultProps = {};

Fragment.propTypes = {};

export default Fragment;
