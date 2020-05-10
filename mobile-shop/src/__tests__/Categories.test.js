import {mount} from "enzyme";
import React from "react";
import ConnectedCategories from "../components/categories/Categories";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import { BrowserRouter as Router } from 'react-router-dom';

test("testing BasketCart component", () => {

    let categories = [
        {
            "id": "1",
            "name": "Apple"
        }
    ];

    const initialState = {
        categories: categories
    };
    const mockStore = configureMockStore();
    let store, wrapper;

    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}>
        <Router>
            <ConnectedCategories/>
        </Router>
    </Provider>);

    expect(wrapper).toMatchSnapshot();
});