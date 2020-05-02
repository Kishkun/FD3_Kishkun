import * as R from "ramda";

import phones from "./mockPhones";
import categories from "./mockCategories";

export const fetchPhones = async () => {
    // return await superagent.get("/api")
    return new Promise((resolve, reject) => {
        resolve(phones)
        // reject('error')
    })
};

export const loadMorePhones = async ({offset}) => {
    // fetch.get(`https://google.com/api/phones/?offset=${offset}`);
    return new Promise((resolve, reject) => {
        resolve(phones)
    })
};

export const fetchPhoneById = async (id) => {
    return new Promise((resolve, reject) => {
        const phone = R.find(R.propEq("id", id), phones);
        resolve(phone)
    })
};

export const fetchCategories = async () => {
    return new Promise((resolve, reject) => {
        resolve(categories)
        // reject('error')
    })
};