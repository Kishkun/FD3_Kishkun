import React from 'react';
import renderer from 'react-test-renderer';
import AddedClientButton from '../src/components/buttons/AddedClientButton';
import myEvents from '../src/events';

test('работа AddedClientButton', () => {

    const component = renderer.create(
        <AddedClientButton />
    );

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    const buttonElem = component.root.find( el => el.type === 'button');

    let eventTriggered = false;

    myEvents.on('onOpenAddedItem', function () {
        eventTriggered = true;
    });

    buttonElem.props.onClick();

    expect(eventTriggered).toBeTruthy();
});