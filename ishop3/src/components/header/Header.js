import React from 'react';
import s from './header.module.css';

let Header = (props) => {
    return (
        <header>
            <h1 className={s.title}>{props.title}</h1>
        </header>
    );
};

export default Header;
