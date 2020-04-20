import React from 'react';
import renderer from 'react-test-renderer';
import myEvents from '../src/events';
import App from '../../mobile/src/App';
import AddedClientButton from '../src/components/buttons/AddedClientButton';
import AddClientItem from '../src/components/options/AddClientItem';

test('тестирование добавление клиента', () => {

    let clients = [];
    let title = 'Test App';
    let companies = [
        {
            'id': 1,
            'name': 'Velcom'
        }
    ];

    const component = renderer.create(
        <App clients={clients}
             title={title}
             companies={companies}/>
    );

    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();


    let addButton = component.root.findByType(AddedClientButton).findByType('button');

    addButton.props.onClick();

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

    let addSubmit = component.root.findByType(AddClientItem).findByType('form');

    const firstName = component.root.findByType(AddClientItem).find(
        (el) => el.type === 'input' && el.props.name === 'firstName');

    const secondName = component.root.findByType(AddClientItem).find(
        (el) => el.type === 'input' && el.props.name === 'secondName');

    const patronymic = component.root.findByType(AddClientItem).find(
        (el) => el.type === 'input' && el.props.name === 'patronymic');

    const balance = component.root.findByType(AddClientItem).find(
        (el) => el.type === 'input' && el.props.name === 'balance');

    firstName.value = 'Alex';

    let newItem = {
        firstName: firstName.value,
        secondName: 'Kishkun',
        patronymic: 'Vladimirovich',
        balance: 1000,
        status: true
    };

    addSubmit.props.onSubmit({
        preventDefault: () => {},
        newItem
    });

    // myEvents.on('onAddItem', function () {
    //     return clients.push(newItem);
    // });

    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});