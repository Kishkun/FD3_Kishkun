import * as R from "ramda";
import request from "superagent";

// import phones from "./mockPhones";
// import categories from "./mockCategories";

export const fetchPhones = async () => {
    // return await superagent.get("/api")
    // return new Promise((resolve, reject) => {
    //     resolve(phones)
    // })
    const {body} = await request.get('//www.mocky.io/v2/5eb040b13300005c00c68d03');
    return body.phones
};

export const fetchPhoneById = async (id) => {
    // return new Promise((resolve, reject) => {
    //     const phone = R.find(R.propEq("id", id), phones);
    //     resolve(phone)
    // })
    const {body} = await request.get('//www.mocky.io/v2/5eb040b13300005c00c68d03');
    const phone = R.find(R.propEq("id", id), body.phones);
    return phone
};

export const fetchCategories = async () => {
    // return new Promise((resolve, reject) => {
    //     resolve(categories)
    //     // reject('error')
    // })
    const {body} = await request.get('//www.mocky.io/v2/5eb040b13300005c00c68d03');
    return body.categories
};