import React from 'react';
import s from './mobile.module.css';

let MobileItem = (props) => {
    let {id, name, model, price, src} = props;

    let deleteItem = (event) => {
        event.stopPropagation();
        props.removeItem(id)
    };

    let toggleClass = (event) => {
        props.toggleBackgroundItem(event.currentTarget)
    };

    return (
        <div className={s.item} onClick={toggleClass}>
            <span className={s.name}>Name: {name}</span>
            <span className={s.model}>Model: {model}</span>
            <span className={s.price}>Price: {price}</span>
            <button className={s.delete_btn} onClick={deleteItem}>
                <span className={s.btn_title}>delete</span>
            </button>
            <img className={s.image} src={src} alt='mobile'/>
        </div>
    );
};

export default MobileItem;