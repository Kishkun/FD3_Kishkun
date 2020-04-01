import React from 'react';
import MobileItem from './MobileItem';

class MobileList extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        let mobileElements = this.props.mobiles.map(mobile =>
            <MobileItem key={mobile.id}
                        id={mobile.id}
                        name={mobile.name}
                        model={mobile.model}
                        price={mobile.price}
                        src={mobile.src}
                        deleteItem={this.props.deleteItem}
                        selectItem={this.props.selectItem}
                        editItem={this.props.editItem}
                        selectedItemId={this.props.selectedItemId}
                        isDisabled={this.props.isDisabled}
            />);
        return (
            <div className='mobiles_wrapper'>
                {mobileElements}
            </div>
        );
    }
};

export default MobileList;