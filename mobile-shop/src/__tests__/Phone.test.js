import {mount} from "enzyme";
import React from "react";
import ConnectedPhone from "../components/phone/Phone";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter as Router } from 'react-router-dom';

test("testing BasketCart component", () => {

    let phones = [
        {
            "id": "1",
            "name": "Apple"
        }
    ];

    const initialState = {
        phonePage: phones[0].id
    };
    const mockStore = configureMockStore();
    let store, wrapper;

    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}>
        <Router>
            <ConnectedPhone/>
        </Router>
    </Provider>);

    wrapper.props.match.params = 1;

    expect(wrapper).toMatchSnapshot();
});