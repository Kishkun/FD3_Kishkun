import React from 'react';
import App from '../../mobile/src/App';
import {mount} from 'enzyme';

test('тестирование добавление клиента end-to-end', () => {

    let clients = [];
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


    let addButton = wrapper.find('.add_btn');
    addButton.simulate('click');
    expect(wrapper).toMatchSnapshot();

    const firstName = wrapper.find('#firstName');
    const secondName = wrapper.find('#secondName');
    const patronymic = wrapper.find('#patronymic');
    const balance = wrapper.find('#balance');

    firstName.instance().value = 'alex';
    secondName.instance().value = 'alex';
    patronymic.instance().value = 'alex';
    balance.instance().value = 1000;

    let addSubmit = wrapper.find('.add_client_form');

    addSubmit.simulate('submit');

    expect(wrapper).toMatchSnapshot();
});
