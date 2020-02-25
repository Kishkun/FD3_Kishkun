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

    getInitialState: function() {
        return {
            mobileList: this.props.mobiles,
            isMobileBg: false
        };
    },

    addBackgroundColor: function() {
        this.setState({ isMobileBg: !this.state.isMobileBg });
        // event.currentTarget.classList.toggle('mobile-bg')

    },

    deleteMobileListItem: function(id) {
        let filteredList = this.state.mobileList.filter(item => {
            return item.id !== id
        });
        this.setState({mobileList: filteredList});
    },

    render: function () {
        let mobilesShop = this.state.mobileList.map((item, index) =>
            React.createElement(MobileItem, {
                key:item.id,
                id:item.id,
                name: item.name,
                model: item.model,
                price: item.price,
                src: item.src,
                removeItem: this.deleteMobileListItem,
                toggleClass: this.addBackgroundColor,
                isMobileBg: this.state.isMobileBg,
            })
        );
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