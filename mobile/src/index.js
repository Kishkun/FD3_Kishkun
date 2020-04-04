import './css/main.css';
import './scss/main.scss';
import './js/common';

import React from 'react'
import ReactDOM, { render } from 'react-dom'
import {withRainbowFrame} from './components/withRainbowFrame'
import Fragment from './Fragment'
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedFragment=withRainbowFrame(colors)(Fragment);
ReactDOM.render(<FramedFragment>Hello</FramedFragment>,
    document.getElementById('react-container'));