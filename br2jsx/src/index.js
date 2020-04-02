import './css/main.css';
import './scss/main.scss';
import './js/common';

import React from 'react'
import ReactDOM, { render } from 'react-dom'
import BR2JSX from './BR2JSX'

ReactDOM.render(<BR2JSX title={'Task BR2JSX'} text={'первый<br>второй<br/>третий<br />последний'}
/>, document.getElementById('react-container'));