import {renderEntireTree} from '../render';

let state = {
    title: 'Online store iShope',
    mobiles: [
        {
            id: 1,
            name: 'huawei',
            model: 'p 20',
            price: 100,
            src: 'huawei_p20.jpg'
        },
        {
            id: 2,
            name: 'nokia',
            model: '7 plus',
            price: 120,
            src: 'nokia_7plus.jpg'
        },
        {
            id: 3,
            name: 'oppo',
            model: 'r 17',
            price: 130,
            src: 'oppo_r17.jpg'
        },
        {
            id: 4,
            name: 'samsung',
            model: 's 8',
            price: 200,
            src: 'sms_s8.jpg'
        },
        {
            id: 5,
            name: 'samsung',
            model: 's 9',
            price: 300,
            src: 'sms_s9.jpg'
        }
    ]
};

export let removeItem = (id) => {
    state.mobiles = state.mobiles.filter(item => item.id !== id);
    renderEntireTree(state);
};

export let toggleBackgroundItem = (item) => {
    item.classList.toggle('mobile_bg');
};

export default state;