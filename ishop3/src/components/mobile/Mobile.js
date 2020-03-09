import React from 'react';
import s from './mobile.module.css';
import MobileItem from './mobileItem';

function Mobile(props) {
    let mobiles = props.mobiles;
    return (
        <div className={s.mobiles_wrapper}>
            <MobileItem mobiles={mobiles}/>
        </div>
    );
}

export default Mobile;