import React from 'react';

let MobileItem = (props) => {
    let {id, name, model, price, src, selectedItemId} = props;

    let classNames = 'mobile';

    if(selectedItemId === id){
        classNames += ' mobile-bg';
    }

    let deleteItem = (event) => {
        event.stopPropagation();
        props.deleteItem(id);
    };

    let selectItem = () => {
        props.selectItem(id);
    };

    let editItem = (event) => {
        event.stopPropagation();
        props.editItem(id);
    };

    return (
        <div className={classNames} key={id} onClick={selectItem}>
            <span className='name'>Name: {name}</span>
            <span className='model'>Model: {model}</span>
            <span className='price'>Price: {price}</span>
            <button className='shop_btn delete_btn' onClick={deleteItem}>
                <span className='btn_title'>delete</span>
            </button>
            <button className='shop_btn edit_btn' onClick={editItem}>
                <span className='btn_title'>edit</span>
            </button>
            <img className='image' src={src} alt='mobile'/>
        </div>
    );
};

export default MobileItem;