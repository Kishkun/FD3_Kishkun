import {mount, shallow} from 'enzyme';
import React from 'react';
import App from '../../mobile/src/App';

test('тестирование редактирование клиента', () => {

    let clients = [
        {
            'id': 1,
            'firstName': 'Иванов',
            'secondName': 'Иван',
            'patronymic': 'Иванович',
            'balance': 200,
            'status': true
        }
    ];
    let title = 'Test App';
    let companies = [
        {
            'id': 1,
            'name': 'Velcom'
        }
    ];

    const wrapper = mount(
        <App clients={clients}
             title={title}
             companies={companies}/>
    );

    expect(wrapper).toMatchSnapshot();

    let deleteButton = wrapper.find('.delete_btn');
    deleteButton.simulate('click');
    expect(wrapper).toMatchSnapshot();
});