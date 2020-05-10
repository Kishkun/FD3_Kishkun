import React from "react";
import {shallow} from 'enzyme';
import Sidebar from "../components/sibedar/Sidebar";

test('Sidebar test component', () => {

    const wrapper = shallow (
        <Sidebar />
    );

    expect(wrapper).toMatchSnapshot();
});