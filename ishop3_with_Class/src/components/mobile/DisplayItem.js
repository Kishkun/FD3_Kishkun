import React from 'react';

let DisplayItem = (props) => {
    let {model, name, price} = props.selectedItem;
    return (
        <ul>
            <li>{name}</li>
            <li>{model}</li>
            <li>{price}</li>
        </ul>
    );
};

export default DisplayItem;
