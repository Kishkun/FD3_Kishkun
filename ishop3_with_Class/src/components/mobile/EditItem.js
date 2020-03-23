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
                <ul>
                    <li>
                        <input type='text'
                               id='name'
                               name='name'
                               className='form_name'
                               ref={this.name}
                               defaultValue={name}
                               onChange={this.validationCheck}
                        />
                        <label htmlFor='name' className={this.labelClass}>Please, fill the field. Value must be a string</label>
                    </li>
                    <li>
                        <input type='text' ref={this.model} defaultValue={model}/>
                    </li>
                    <li>
                        <input type='text' ref={this.price} defaultValue={price}/>
                    </li>
                    <li>
                        <input type='text' disabled defaultValue={src}/>
                    </li>
                </ul>
                <div>
                    <button type='submit' disabled={this.state.isDisabled} className='shop_btn'>
                        <span className='btn_title'>save</span>
                    </button>
                    <button type='button' className='shop_btn'>
                        <span className='btn_title'>cancel</span>
                    </button>
                </div>
            </form>
        );
    }
}

export default EditItem;
