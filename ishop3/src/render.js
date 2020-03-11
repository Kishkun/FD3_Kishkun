import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {removeItem, toggleBackgroundItem} from './redux/state';

export let renderEntireTree = (state) => {
    ReactDOM.render(<App title={state.title}
                         mobiles={state.mobiles}
                         removeItem={removeItem}
                         toggleBackgroundItem={toggleBackgroundItem}
    />, document.getElementById('root'));
};

