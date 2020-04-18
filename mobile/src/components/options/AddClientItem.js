import React from 'react';
import PropTypes from 'prop-types';
import myEvents from '../../events';

class AddClientItem extends React.PureComponent {

    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                firstName: '',
                secondName: '',
                patronymic: '',
                balance: '',
                status: true
            },
            errors: {
                firstName: false,
                secondName: false,
                patronymic: false,
                balance: false,
            },
            isDisabled: false
        };
        this.firstNameRef = React.createRef();
        this.secondNameRef = React.createRef();
        this.patronymicRef = React.createRef();
        this.balanceRef = React.createRef();
    }

    addSubmit = (e) => {
        e.preventDefault();
        let newItem = {
            firstName: this.firstNameRef.current.value,
            secondName: this.secondNameRef.current.value,
            patronymic: this.patronymicRef.current.value,
            balance: +this.balanceRef.current.value,
            status: this.state.inputs.status,
        };
        if (newItem.firstName && newItem.secondName && newItem.patronymic && newItem.balance) {
            myEvents.emit('onAddItem', newItem)
        }
        this.setState({
            inputs: {
                firstName: '',
                secondName: '',
                patronymic: '',
                balance: '',
            },
            isDisabled: true
        });
    };


    validationCheck = (item) => {
        if (item.current.value.length === 0) {
            this.setState({
                isDisabled: true,
                errors: {
                    ...this.state.errors,
                    [item.current.id] : true
                }
            })
        } else {
            this.setState({
                isDisabled: false,
                errors: {
                    ...this.state.errors,
                    [item.current.id] : false
                }
            })
        }
        if ( item === this.balanceRef) {
            this.validateBalance(item);
        }
    };

    validateBalance(item) {
        if (item.current.value > 0) {
            this.setState({
                inputs: {
                    status: true
                }
            })
        } else {
            this.setState({
                inputs: {
                    status: false
                }
            })
        }
    }

    render() {
        let {inputs, errors, isDisabled} = this.state;
        return (
            <form onSubmit={this.addSubmit} className='add_client_form'>
                <ul className='list'>
                    <li className='list_item'>
                        <label htmlFor='firstName'>
                            <input type='text'
                                   id='firstName'
                                   name='firstName'
                                   className={!errors.firstName ? 'form_input' : 'form_input error'}
                                   ref={this.firstNameRef}
                                   defaultValue={inputs.firstName}
                                   onBlur={() => this.validationCheck(this.firstNameRef)}
                            />
                        </label>
                    </li>
                    <li className='list_item'>
                        <label htmlFor='secondName'>
                            <input type='text'
                                   id='secondName'
                                   name='secondName'
                                   className={!errors.secondName ? 'form_input' : 'form_input error'}
                                   ref={this.secondNameRef}
                                   defaultValue={inputs.secondName}
                                   onBlur={() => this.validationCheck(this.secondNameRef)}
                            />
                        </label>
                    </li>
                    <li className='list_item'>
                        <label htmlFor='patronymic'>
                            <input type='text'
                                   id='patronymic'
                                   name='patronymic'
                                   className={!errors.patronymic ? 'form_input' : 'form_input error'}
                                   ref={this.patronymicRef}
                                   defaultValue={inputs.patronymic}
                                   onBlur={() => this.validationCheck(this.patronymicRef)}
                            />
                        </label>
                    </li>
                    <li className='list_item'>
                        <label htmlFor='balance'>
                            <input type='number'
                                   id='balance'
                                   name='balance'
                                   className={!errors.balance ? 'form_input' : 'form_input error'}
                                   ref={this.balanceRef}
                                   defaultValue={inputs.balance}
                                   onBlur={() => this.validationCheck(this.balanceRef)}
                            />
                        </label>
                    </li>
                </ul>
                <div className='form_btn_block'>
                    <button
                        type='submit'
                        className={!isDisabled ? 'clients_btn save_btn' : 'clients_btn save_btn disabled'}>
                        save
                    </button>
                    <button
                        type='button'
                        className='clients_btn cancel_btn'
                        onClick={() => myEvents.emit('closeForm', this)}
                    >
                        cancel
                    </button>
                </div>
            </form>
        );
    }
}

export default AddClientItem;
