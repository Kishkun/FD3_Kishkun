let shopTitle = 'Online store iShope';
let mobiles = [
    {
        id: 1,
        name: 'huawei',
        model: 'p 20',
        price: 100,
        src: './image/huawei_p20.jpg'
    },
    {
        id: 2,
        name: 'nokia',
        model: '7 plus',
        price: 120,
        src: './image/nokia_7plus.jpg'
    },
    {
        id: 3,
        name: 'oppo',
        model: 'r 17',
        price: 130,
        src: './image/oppo_r17.jpg'
    },
    {
        id: 4,
        name: 'samsung',
        model: 's 8',
        price: 200,
        src: './image/sms_s8.jpg'
    },
    {
        id: 5,
        name: 'samsung',
        model: 's 9',
        price: 300,
        src: './image/sms_s9.jpg'
    }
]



﻿let MobileShop = React.createClass({

    displayName: 'MobileShop',

    getDefaultProps: function () {
        return {
            title: 'Online store'
        }
    },

    propTypes: {
        title: React.PropTypes.string.isRequired,
        mobiles: React.PropTypes.array.isRequired,
    },

    render: function () {

        let mobilesShop = [];
        this.props.mobiles.forEach((item, index) => mobilesShop.push(
            React.DOM.div({key: item.id, className: 'mobile'},
                React.DOM.span({className: 'name'}, 'Name: ', item.name),
                React.DOM.span({className: 'model'}, 'Model: ', item.model),
                React.DOM.span({className: 'price'}, 'Price: ', item.price),
                React.DOM.img({className: 'image', src: item.src, alt: 'mobile'}),
            )
        ));
        return React.DOM.div({className: 'shop_wrapper'},
            React.DOM.div({className: 'shop_title'}, this.props.title),
            React.DOM.div({className: 'mobiles_wrapper'}, mobilesShop),
        );
    }
});

ReactDOM.render(
    React.createElement(MobileShop, {title: shopTitle, mobiles: mobiles}),
    document.getElementById('app')
);