import './css/main.css';
import './scss/main.scss';
import './js/common';

import React from 'react'
import ReactDOM, { render } from 'react-dom'
import data from './static/mobiles'
import App from './App'

ReactDOM.render(<App title={data.title} mobiles={data.mobiles}
/>, document.getElementById('react-container'));