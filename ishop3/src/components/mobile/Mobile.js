import React from 'react';
import s from './mobile.module.css';
import MobileItem from './mobileItem';

let Mobile = (props) => {
    let mobileElements = props.mobiles.map(mobile =>
        <MobileItem key={mobile.id}
                    id={mobile.id}
                    name={mobile.name}
                    model={mobile.model}
                    price={mobile.price}
                    src={mobile.src}
                    removeItem={props.removeItem}
                    toggleBackgroundItem={props.toggleBackgroundItem}
        />);
    return (
        <div className={s.wrapper}>
            {mobileElements}
        </div>
    );
}

export default Mobile;