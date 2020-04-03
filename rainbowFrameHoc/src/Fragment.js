import React from 'react';
import PropTypes from 'prop-types';

class Fragment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let style = {
            border: `10px solid ${this.props.color}`,
            padding: '20px'
        };
        return (
            <div style={style}>{this.props.children}</div>
        );
    }
}

Fragment.defaultProps = {};

Fragment.propTypes = {};

export default Fragment;
