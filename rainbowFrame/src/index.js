import './css/main.css';
import './scss/main.scss';
import './js/common';

import React from 'react'
import ReactDOM, { render } from 'react-dom'
import RainbowFrame from './RainbowFrame'
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(<RainbowFrame title='Task RainbowFrame' colors={colors}>Hello</RainbowFrame>,
    document.getElementById('react-container'));