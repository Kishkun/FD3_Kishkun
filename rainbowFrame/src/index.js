import './css/main.css';
import './scss/main.scss';
import './js/common';

import React from 'react'
import ReactDOM, { render } from 'react-dom'
import RainbowFrame from './RainbowFrame'

ReactDOM.render(<RainbowFrame/>,
    document.getElementById('react-container'));