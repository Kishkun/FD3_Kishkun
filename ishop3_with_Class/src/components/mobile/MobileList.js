import React from 'react';
import MobileItem from './MobileItem';

let MobileList = (props) => {
    let mobileElements = props.mobiles.map(mobile =>
        <MobileItem key={mobile.id}
                    id={mobile.id}
                    name={mobile.name}
                    model={mobile.model}
                    price={mobile.price}
                    src={mobile.src}
                    deleteItem={props.deleteItem}
                    selectItem={props.selectItem}
                    editItem={props.editItem}
                    selectedItemId={props.selectedItemId}
        />);
    return (
        <div className='mobiles_wrapper'>
            {mobileElements}
        </div>
    );
};

export default MobileList;