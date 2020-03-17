import React from 'react';
import s from './footer.module.css';

let Footer = (props) => {
    return (
        <footer>
            <button className={s.add_btn}>
                <span className={s.btn_title}>New product</span>
            </button>
        </footer>
    );
};

export default Footer;
