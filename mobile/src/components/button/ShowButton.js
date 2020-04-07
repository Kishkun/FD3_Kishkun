import React from 'react';

const ShowButton = (props) => {
    let item = props.item;
    return(
        <button
            type='button'
            key={item.id}
            className={props.activeCompanyId === item ? 'name_btn active' : 'name_btn'}
            onClick={() => props.showNameCompany(item)}>{item.name}</button>
    )
};

export default ShowButton;