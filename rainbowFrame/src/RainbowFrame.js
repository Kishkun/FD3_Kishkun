import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let helloWrapper = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh'
        };
        let title = {
            color: '#000',
            textAlign: 'center',
            fontSize: '2vw',
            paddingTop: '5vh'
        };
        let block = this.props.colors.reduce((acc, color, index) =>
                <div key={index} style={{border: `10px solid ${color}`, padding: '10px'}}>{acc}</div>
            , this.props.children);
        return (
            <div className='rainbowFrame'>
                <h1 style={title}>{this.props.title}</h1>
                <div style={helloWrapper}>
                    {block}
                </div>
            </div>
        );
    }
}

RainbowFrame.defaultProps = {};

RainbowFrame.propTypes = {};

export default RainbowFrame;
