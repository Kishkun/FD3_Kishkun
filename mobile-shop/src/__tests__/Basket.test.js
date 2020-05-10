import React from "react";
import {shallow, mount} from "enzyme";
import ConnectedBasket from "../components/basket/Basket";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();

test("Basket test component", () => {

    const initialState = {
        phones: 1
    };

    const store = mockStore(initialState);

    const wrapper = shallow(
        <Provider store={store}>
            <ConnectedBasket/>
        </Provider>
    );

    expect(wrapper).toMatchSnapshot();
});
