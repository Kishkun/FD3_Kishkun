import {mount} from 'enzyme';
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

    let editButton = wrapper.find('.edit_btn');
    editButton.simulate('click');
    expect(wrapper).toMatchSnapshot();

    const firstName = wrapper.find('#firstName');
    const secondName = wrapper.find('#secondName');
    const patronymic = wrapper.find('#patronymic');
    const balance = wrapper.find('#balance');

    firstName.instance().value = 'Иванов new firstName';
    secondName.instance().value = 'Иван new secondName';
    patronymic.instance().value = 'patronymic new patronymic';
    balance.instance().value = 100;

    let editSubmit = wrapper.find('.edit_client_form');

    editSubmit.simulate('submit');

    expect(wrapper).toMatchSnapshot();
});