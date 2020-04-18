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


    let newItem = {
        firstName: 'Alex',
        secondName: 'Kishkun',
        patronymic: 'Vladimirovich',
        balance: 1000,
        status: true
    };
    // let input = component.root.findByType(AddClientItem).findAllByType('input');
    //
    // input[0].value = 'alex';
    // console.log( input[1].value);
    // let addForm = component.root.findByType(AddClientItem).findByType('form');
    // addForm.props.onSubmit();

    // let closeButton = component.root.findByType(AddClientItem).findAllByType('button');
    // console.log(closeButton[1]);
    //
    // closeButton[1].props.onClick();
    //
    // componentTree = component.toJSON();
    // expect(componentTree).toMatchSnapshot();
});