import React from 'react';
import AddedClientButton from '../src/components/buttons/AddedClientButton';
import myEvents from '../src/events';
import {shallow} from 'enzyme';

test('работа AddedClientButton', () => {
    const wrapper = shallow(<AddedClientButton/>);
    expect(wrapper).toMatchSnapshot();

    const buttonElem = wrapper.find('.add_btn');

    let eventTriggered = false;

    myEvents.on('onOpenAddedItem', function () {
        eventTriggered = true;
    });

    buttonElem.simulate('click');

    expect(eventTriggered).toBeTruthy();

});