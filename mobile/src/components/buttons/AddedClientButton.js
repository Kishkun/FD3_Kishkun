import React from 'react';
import myEvents from './../../events';

const AddedClientButton = (props) => {
    console.log('add button function');
    return (
        <button
            type='button'
            className='clients_btn add_btn'
            onClick={()=> myEvents.emit('onOpenAddedItem', this)}
        >Добавить клиента</button>
    )
};

export default AddedClientButton;