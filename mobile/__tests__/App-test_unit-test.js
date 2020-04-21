import React from 'react';
import App from '../../mobile/src/App';
import {shallow} from 'enzyme';

test('тестирование добавление клиента unit-test', () => {

    let clients = [
        {
            id: 1,
            firstName: "Иванов",
            secondName: "Иван",
            patronymic: "Иванович",
            balance: 200,
            status: true
        }
    ];
    let title = 'Test App';
    let companies = [
        {
            'id': 1,
            'name': 'Velcom'
        }
    ];

    const wrapper = shallow(
        <App clients={clients}
             title={title}
             companies={companies}/>
    );

    clients = wrapper.state('clients');
    expect(clients).toHaveLength(1);

    let newItem = {
        firstName: "Alex",
        secondName: "Kishkun",
        patronymic: "Vladimirovich",
        balance: 200,
        status: true,
    };

    wrapper.instance().onAddItem(newItem);

    clients = wrapper.state('clients');
    expect(clients).toHaveLength(2);

    expect(clients[1].id).toBe(2);
    expect(clients[1].firstName).toBe('Alex');
    expect(clients[1].secondName).toBe('Kishkun');
    expect(clients[1].patronymic).toBe('Vladimirovich');
    expect(clients[1].balance).toBe(200);
    expect(clients[1].status).toBe(true);
});