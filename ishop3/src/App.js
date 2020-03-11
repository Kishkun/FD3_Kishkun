import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Mobile from './components/mobile/Mobile';

let App = (props) => {
    return (
        <div className="shop_wrapper">
            <header>
                <h1 className='shop_title'>{props.title}</h1>
            </header>
            <Mobile mobiles={props.mobiles}
                    removeItem={props.removeItem}
                    toggleBackgroundItem={props.toggleBackgroundItem}
            />
        </div>
    );
};

App.defaultProps = {
    title: 'Online store',
    mobiles: []
};

App.propTypes = {
    title: PropTypes.string.isRequired,
    mobiles: PropTypes.array.isRequired,
};

export default App;
