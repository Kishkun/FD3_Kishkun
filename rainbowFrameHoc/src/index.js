import './css/main.css';
import './scss/main.scss';
import './js/common';

import React from 'react'
import ReactDOM, { render } from 'react-dom'
import RainbowFrameHOC from './RainbowFrameHOC'
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(<RainbowFrameHOC title='Task RainbowFrame' colors={colors}>Hello</RainbowFrameHOC>,
    document.getElementById('react-container'));