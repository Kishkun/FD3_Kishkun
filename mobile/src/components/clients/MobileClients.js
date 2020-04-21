import React from 'react';
import PropTypes from 'prop-types';
import ClientItem from './ClientItem';

class MobileClients extends React.PureComponent {

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
        ),
        isShowAddedForm: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('MobileClients render');
        let mobileClients = this.props.clients.map(item =>
            <ClientItem key={item.id} item={item} isShowAddedForm={this.props.isShowAddedForm} />);
        return (
            <div className='clients_wrapper'>
                <div className='clients_title'>
                    <div className='th'>Фамилия</div>
                    <div className='th'>Имя</div>
                    <div className='th'>Отчество</div>
                    <div className='th'>Баланс</div>
                    <div className='th'>Статус</div>
                    <div className='th button_th'>Редактировать</div>
                    <div className='th button_th'>Удалить</div>
                </div>
                {mobileClients}
            </div>
        );
    }
}

export default MobileClients;
