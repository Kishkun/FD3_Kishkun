import './css/main.css';
import './scss/main.scss';
import './js/common';

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import data from './static/clients'

ReactDOM.render(<App
        clients={data.clients}
        title={data.title}
        companies={data.companies}/>,
    document.getElementById('react-container'));