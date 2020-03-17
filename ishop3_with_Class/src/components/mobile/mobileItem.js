import React from 'react';

let MobileItem = (props) => {
    let {id, name, model, price, src} = props;

    let deleteItem = (event) => {
        event.stopPropagation();
        props.deleteItem(id);
    };

    let toggleClass = (event) => {
        // props.toggleBackgroundItem(event.currentTarget)
        console.log('background');
    };

    return (
        <div className='mobile' key={id} onClick={toggleClass}>
            <span className='name'>Name: {name}</span>
            <span className='model'>Model: {model}</span>
            <span className='price'>Price: {price}</span>
            <button className='shop_btn delete_btn' onClick={deleteItem}>
                <span className='btn_title'>delete</span>
            </button>
            <img className='image' src={src} alt='mobile'/>
        </div>
    );
};

export default MobileItem;