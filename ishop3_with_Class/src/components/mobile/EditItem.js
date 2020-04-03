import React from 'react';

class EditItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDisabled: this.props.isDisabled,
            inputs: {
                name: this.props.editingItem.name,
                model: this.props.editingItem.model,
                price: this.props.editingItem.price,
                src: this.props.editingItem.src
            },
            errors: {
                name: '',
                model: '',
                price: ''
            }
        };
        this.saveBtnClass = 'shop_btn save_btn';
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newItem = this.props.editingItem;
        newItem.name = this.state.inputs.name;
        newItem.model = this.state.inputs.model;
        newItem.price = this.state.inputs.price;
        newItem.src = this.state.inputs.src;
        this.setState({isDisabled: true});
        this.saveBtnClass += ' disabled';
        if(newItem.name !== '' && newItem.model !== '' && newItem.price !== ''){
            this.props.handleSubmit();
        }
    };

    handlerOnChange = (e) => {
        let {name, value} = e.target;
        this.setState({
            inputs: {
                ...this.state.inputs,
                [name]: value
            }});
    };

    validationCheck = (e) => {
        let { inputs } = this.state;
        let err = 'Please, fill the field. Value must be a string';
        if (inputs[e.target.name].length === 0) {
            this.saveBtnClass += ' disabled';
            this.setState({
                isDisabled: true,
                errors: {
                    ...this.state.errors,
                    [e.target.name]: err
                }
            });
        } else {
            this.saveBtnClass = 'shop_btn save_btn';
            this.setState({
                isDisabled: false,
                errors: {
                    ...this.state.errors,
                    [e.target.name]: ''
                }
            });
        }
    };

    render() {
        const { inputs, errors } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className='edit_form'>
                <ul className='list'>
                    <li className='list_item'>
                        <input type='text'
                               id='name'
                               name='name'
                               className='form_input'
                               defaultValue={inputs.name}
                               onChange={this.handlerOnChange}
                               onBlur={this.validationCheck}
                        />
                        <label htmlFor='name' className='error_label'>{errors.name}</label>
                    </li>
                    <li className='list_item'>
                        <input
                            type='text'
                            id='model'
                            name='model'
                            className='form_input'
                            defaultValue={inputs.model}
                            onChange={this.handlerOnChange}
                            onBlur={this.validationCheck}
                        />
                        <label htmlFor='model' className='error_label'>{errors.model}</label>
                    </li>
                    <li className='list_item'>
                        <input
                            type='text'
                            id='price'
                            name='price'
                            className='form_input'
                            defaultValue={inputs.price}
                            onChange={this.handlerOnChange}
                            onBlur={this.validationCheck}
                        />
                        <label htmlFor='price' className='error_label'>{errors.price}</label>
                    </li>
                    <li className='list_item'>
                        <input
                            type='text'
                            className='form_input'
                            disabled
                            defaultValue={inputs.src}
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
                    <button
                        type='button'
                        className='shop_btn cancel_btn'
                        onClick={this.props.closeItem}>
                        <span className='btn_title'>cancel</span>
                    </button>
                </div>
            </form>
        );
    }
}

export default EditItem;
