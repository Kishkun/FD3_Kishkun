import React from 'react';

class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDisabled: this.props.isDisabled,
            inputs: {
                name: '',
                model: '',
                price: '',
                src: 'assets/img/huawei_p20.jpg'
            },
            errors: {
                name: '',
                model: '',
                price: ''
            }
        };
    }

    handlerOnChange = (e) => {
        let {name, value} = e.target;
        this.setState({
            inputs: {
                ...this.state.inputs,
                [name]: value
            }
        });
    };

    addSubmit = (e) => {
        e.preventDefault();
        let newItem = {
            name: this.state.inputs.name,
            model: this.state.inputs.model,
            price: this.state.inputs.price,
            src: this.state.inputs.src,
        };
        if(newItem.name !== '' && newItem.model !== '' && newItem.price !== ''){
            this.props.addItem(newItem);
        }
        this.setState({
            inputs: {
                name: '',
                model: '',
                price: '',
                src: this.state.inputs.src
            }
        });
        this.validationCheck.bind(this);
    };

    validationCheck = (e) => {
        let { inputs } = this.state;
        let err = 'Please, fill the field. Value must be a string';
        if (inputs[e.target.name].length === 0) {
            this.setState({
                isDisabled: true,
                errors: {
                    ...this.state.errors,
                    [e.target.name]: err
                }
            });
        } else {
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
        let {inputs, errors} = this.state;
        return (
            <form onSubmit={this.addSubmit} className='add_form'>
                <ul className='list'>
                    <li className='list_item'>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='form_input'
                            defaultValue={inputs.name}
                            onChange={this.handlerOnChange}
                            onBlur={this.validationCheck}
                            required
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
                            required
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
                            required
                        />
                        <label htmlFor='price' className='error_label'>{errors.price}</label>
                    </li>
                    <li className='list_item'>
                        <input
                            type='text'
                            className='form_input'
                            disabled
                            defaultValue={inputs.src}
                            onChange={this.handlerOnChange}
                            required
                        />
                    </li>
                </ul>
                <div className='form_btn_block'>
                    <button
                        type='submit'
                        className='shop_btn add_form_btn'>
                        <span className='btn_title'>Add</span>
                    </button>
                    <button
                        type='button'
                        className='shop_btn cancel_btn'
                        onClick={this.props.closeItem}>
                        <span className='btn_title'>Reset</span>
                    </button>
                </div>
            </form>
        );
    }
};

export default AddItem;
