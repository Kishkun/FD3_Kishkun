import React from 'react';
import myEvents from './../../events';

const CompanyNameButton = (props) => {
    let item = props.item;
    return (
        <button
            type='button'
            key={item.id}
            className={props.activeCompanyId === item ? 'name_btn active' : 'name_btn'}
            onClick={() => myEvents.emit('changedName', item)}>{item.name}</button>
    )
};

export default CompanyNameButton;