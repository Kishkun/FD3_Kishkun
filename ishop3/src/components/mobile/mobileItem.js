import React from 'react';
import s from './mobile.module.css';

function MobileItem(props) {
    let mobiles = props.mobiles;
    return (
        <div className={s.mobile}>
            {console.log(mobiles)}
        </div>
    );
}

export default MobileItem;