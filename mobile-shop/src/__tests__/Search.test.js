import {mount, shallow} from "enzyme";
import React from "react";
import ConnectedSearch, {Search} from "../components/search/Search";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";

test("testing search component", () => {

    let phones = [
        {
            "id": "1",
            "categoryId": "1",
            "name": "Apple XR",
            "description":
                "The Apple iPhone XR is a smartphone that was tested with the iOS 12.0. 1 operating system. This model weighs 6.9 ounces, has a 6.1 inch touch screen display, 12-megapixel main camera, and 7-megapixel selfie camera. It comes with 3GB of RAM.",
            "price": 823,
            "image": "/store/uploads/apple-iphone-xr-new.jpg",
            "cpu": "A12 Bionic chip",
            "camera": "12MP Wide camera",
            "size": "150.9 x 75.7 x 8.3 mm (5.94 x 2.98 x 0.33 in)",
            "weight": "194 g (6.84 oz)",
            "display": "6.1-inch",
            "battery": "Non-removable Li-Ion 2942 mAh battery (11.16 Wh)",
            "memory": "64GB, 128GB and RAM 4 GB"
        }
    ];

    const initialState = {
        ids: phones
    };
    const mockStore = configureMockStore();
    let store, wrapper;

    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><ConnectedSearch/></Provider>);

    expect(wrapper).toMatchSnapshot();

    const searchEl = wrapper.find("#search");
    searchEl.instance().value = "apple";
    const searchSubmit = wrapper.find("#search-form");
});