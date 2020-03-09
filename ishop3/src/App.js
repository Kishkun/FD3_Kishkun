import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Mobile from './components/mobile/Mobile';

function App(props) {
    let {title, mobiles} = props.state;
    return (
    <div className="shop_wrapper">
        <header>
            <h1 className='shop_title'>{title}</h1>
        </header>
        <Mobile mobiles={mobiles}/>
    </div>
  );
}

App.defaultProps = {
    title: 'Online store'
};

App.propTypes = {
    title: PropTypes.string.isRequired,
    mobiles: PropTypes.array.isRequired,
};

export default App;
