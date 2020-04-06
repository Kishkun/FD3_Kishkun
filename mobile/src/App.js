import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props);
        return (
            <div>Mobile title</div>
        );
    }
}

Fragment.defaultProps = {};

Fragment.propTypes = {};

export default App;
