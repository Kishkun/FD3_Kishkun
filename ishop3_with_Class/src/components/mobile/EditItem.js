import React from 'react';

class EditItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false,
            name: ''
        };
        this.name = React.createRef();
        this.model = React.createRef();
        this.price = React.createRef();
        this.labelClass = 'input_label';
        this.saveBtnClass = 'shop_btn save_btn';
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newItem = this.props.editingItem;
        let newName = this.name.current.value;
        let newModel = this.model.current.value;
        let newPrice = this.price.current.value;
        newItem.name = newName;
        newItem.model = newModel;
        newItem.price = newPrice;
        this.props.handleSubmit(newItem);
        this.validationCheck();
    };

    validationCheck = (e) => {
        let newName = this.name.current.value;
        if (newName === '') {
            this.labelClass += ' invalid';
            this.saveBtnClass += ' disabled';
            this.setState((state) =>{
                return{
                    isDisabled: !state.isDisabled,
                    newName: state.name
                }
            });
        }
    };

    componentDidUpdate() {
        let name = this.name.current.value;
        if (name !== '') {
            this.name.current.value = this.props.editingItem.name;
            this.model.current.value = this.props.editingItem.model;
            this.price.current.value = this.props.editingItem.price;
        }
    }

    render() {
        let {model, name, price, src} = this.props.editingItem;
        return (
            <form onSubmit={this.handleSubmit} className='edit_form'>
                <ul className='list'>
                    <li className='list_item'>
                        <input type='text'
                               id='name'
                               name='name'
                               className='form_input'
                               ref={this.name}
                               defaultValue={name}
                               onChange={this.validationCheck}
                        />
                        <label htmlFor='name' className={this.labelClass}>Please, fill the field. Value must be a string</label>
                    </li>
                    <li className='list_item'>
                        <input
                            type='text'
                            id='model'
                            name='model'
                            className='form_input'
                            ref={this.model}
                            defaultValue={model}
                        />
                    </li>
                    <li className='list_item'>
                        <input
                            type='text'
                            id='price'
                            name='price'
                            className='form_input'
                            ref={this.price}
                            defaultValue={price}
                        />
                    </li>
                    <li className='list_item'>
                        <input
                            type='text'
                            className='form_input'
                            disabled
                            defaultValue={src}
                        />
                    </li>
                </ul>
                <div className='form_btn_block'>
                    <button
                        type='submit'
                        disabled={this.state.isDisabled}
                        className={this.saveBtnClass}>
                        <span className='btn_title'>save</span>
                    </button>
                    <button type='button' className='shop_btn cancel_btn'>
                        <span className='btn_title'>cancel</span>
                    </button>
                </div>
            </form>
        );
    }
}

export default EditItem;
