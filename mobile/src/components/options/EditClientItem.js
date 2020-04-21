import React from 'react';
import PropTypes from 'prop-types';
import myEvents from '../../events';

class EditClientItem extends React.PureComponent {

    static propTypes = {
        clients: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                firstName: PropTypes.string.isRequired,
                secondName: PropTypes.string.isRequired,
                patronymic: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
                status: PropTypes.bool.isRequired
            })
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                firstName: this.props.editingItem.a,
                secondName: this.props.editingItem.secondName,
                patronymic: this.props.editingItem.patronymic,
                balance: this.props.editingItem.balance,
                status: this.props.editingItem.status,
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

    editFormSubmit = (e) => {
        e.preventDefault();
        let firstName = this.firstNameRef.current.value;
        let secondName = this.secondNameRef.current.value;
        let patronymic = this.patronymicRef.current.value;
        let balance = this.balanceRef.current.value;
        let newItem = {
            ...this.props.editingItem,
            firstName: firstName,
            secondName: secondName,
            patronymic: patronymic,
            balance: +balance,
            status: this.state.inputs.status

        };
        if (firstName && secondName && patronymic && balance) {
            myEvents.emit('onClientChange', newItem);
        }
        this.setState({
            isDisabled: true,
        })
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
            <form onSubmit={this.editFormSubmit} className='edit_client_form'>
                <ul className='list'>
                    <li className='list_item'>
                        <label htmlFor='firstName'>
                            <input type='text'
                                   id='firstName'
                                   name='firstName'
                                   className={!errors.firstName ? 'form_input' : 'form_input error'}
                                   ref={this.firstNameRef}
                                   defaultValue={inputs.firstName}
                                   onChange={() => this.validationCheck(this.firstNameRef)}
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
                                   onChange={() => this.validationCheck(this.secondNameRef)}
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
                                   onChange={() => this.validationCheck(this.patronymicRef)}
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
                                   onChange={() => this.validationCheck(this.balanceRef)}
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

export default EditClientItem;
