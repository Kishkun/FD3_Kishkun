import React from 'react';

class MobileItem extends React.Component {

    constructor(props) {
        super(props);
    }

    deleteItem = (event) => {
        event.stopPropagation();
        this.props.deleteItem(this.props.id);
    };

    selectItem = () => {
        this.props.selectItem(this.props.id);
    };

    editItem = (event) => {
        event.stopPropagation();
        this.props.editItem(this.props.id);
    };

    render() {
        let mobileClass = 'mobile';

        if (this.props.selectedItemId === this.props.id) {
            mobileClass += ' mobile-bg';
        }

        return (
            <div className={mobileClass} key={this.props.id} onClick={this.selectItem}>
                <span className='name'>Name: {this.props.name}</span>
                <span className='model'>Model: {this.props.model}</span>
                <span className='price'>Price: {this.props.price}</span>
                <button className={this.props.isDisabled ? 'shop_btn delete_btn disabled' : 'shop_btn delete_btn'}
                        onClick={this.deleteItem}
                        disabled={this.props.isDisabled}>
                    <span className='btn_title'>delete</span>
                </button>
                <button className={this.props.isDisabled ? 'shop_btn edit_btn disabled' : 'shop_btn edit_btn'}
                        onClick={this.editItem}
                        disabled={this.props.isDisabled}>
                    <span className='btn_title'>edit</span>
                </button>
                <img className='image' src={this.props.src} alt='mobile'/>
            </div>
        );
    }
};

export default MobileItem;