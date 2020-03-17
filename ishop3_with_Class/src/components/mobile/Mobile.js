import React from 'react';
import MobileItem from './mobileItem';

let Mobile = (props) => {
    let mobileElements = props.mobiles.map(mobile =>
        <MobileItem key={mobile.id}
                    id={mobile.id}
                    name={mobile.name}
                    model={mobile.model}
                    price={mobile.price}
                    src={mobile.src}
                    deleteItem={props.deleteItem}
        />);
    return (
        <div className='mobiles_wrapper'>
            {mobileElements}
        </div>
    );
};

export default Mobile;