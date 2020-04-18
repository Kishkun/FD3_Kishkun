import React from 'react';
import PropTypes from 'prop-types';
import myEvents from '../../events';

class ClientItem extends React.PureComponent {

    static propTypes = {
        clients:PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                firstName: PropTypes.string.isRequired,
                secondName: PropTypes.string.isRequired,
                patronymic: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
                status: PropTypes.bool.isRequired
            })
        )
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('Client Item render');
        let {id, firstName, secondName, patronymic, balance, status} = this.props.item;
        return (
            <div className='client_block'>
                <div className='td firstName'>{firstName}</div>
                <div className='td secondName'>{secondName}</div>
                <div className='td patronymic'>{patronymic}</div>
                <div className='td balance'>{balance}</div>
                <div className={status ? 'td status active' : 'td status disabled'}>
                    {status ? 'active' : 'disabled'}</div>
                <div className='td button_td'>
                    <button
                        type='button'
                        disabled={this.props.isShowAddedForm}
                        className={!this.props.isShowAddedForm ? 'clients_btn edit_btn' : 'clients_btn edit_btn disabled'}
                        onClick={() => myEvents.emit('onEditItem', id)}
                    >Редактировать</button>
                </div>
                <div className='td button_td'>
                    <button
                        type='button'
                        disabled={this.props.isShowAddedForm}
                        className={!this.props.isShowAddedForm ? 'clients_btn delete_btn' : 'clients_btn delete_btn disabled'}
                        onClick={() => myEvents.emit('onDeleteItem', id)}
                    >Удалить</button>
                </div>
            </div>
        );
    }
}

export default ClientItem;
