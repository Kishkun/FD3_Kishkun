import React from "react";
import {shallow} from 'enzyme';
import Layout from "../components/layout/Layout";

test('Layout test component', () => {

    const wrapper = shallow (
        <Layout />
    );

    expect(wrapper).toMatchSnapshot();
});