import React from 'react';

let DisplayItem = (props) => {
    let {model, name, price, src} = props.selectedItem;
    return (
        <ul className='info_list'>
            <li className='info_item'>Name: {name}</li>
            <li className='info_item'>Model: {model}</li>
            <li className='info_item'>Price: {price}</li>
            <li className='info_item'>Image src: {src}</li>
        </ul>
    );
};

export default DisplayItem;
