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
        },
        {
            "id": 2,
            "firstName": "Сидоров",
            "secondName": "Сидор",
            "patronymic": "Сидорович",
            "balance": -250,
            "status": false
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

    let activeClientButton = wrapper.find('[data-name="active"]');
    activeClientButton.simulate('click');
    expect(wrapper).toMatchSnapshot();

    let blockedClientButton = wrapper.find('[data-name="blocked"]');
    blockedClientButton.simulate('click');
    expect(wrapper).toMatchSnapshot();
});