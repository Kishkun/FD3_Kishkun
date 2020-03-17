import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Mobile from './components/mobile/Mobile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

let App = (props) => {
    return (
        <div className="shop_wrapper">
            <Header title={props.title} />
            <main>
                <Mobile mobiles={props.mobiles}
                        removeItem={props.removeItem}
                        toggleBackgroundItem={props.toggleBackgroundItem}
                />
            </main>
            <Footer />
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
