import './css/main.css';
import './scss/main.scss';
import './js/common';

import React from 'react'
import ReactDOM, {render} from 'react-dom'
import App from './App'

let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(<App colors={colors}/>,
    document.getElementById('react-container'));