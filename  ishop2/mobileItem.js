let MobileItem = React.createClass({

    displayName: 'MobileItem',

    propTypes: {
       name: React.PropTypes.string.isRequired,
       model: React.PropTypes.string.isRequired,
       price: React.PropTypes.number.isRequired,
       src: React.PropTypes.string.isRequired,
    },

    deleteItem: function() {
        this.props.removeItem(this.props.id);
    },

    render: function () {
        return React.DOM.div({className: 'mobile', key: this.props.id},
            React.DOM.span({className: 'name'}, 'Name: ', this.props.name),
            React.DOM.span({className: 'model'}, 'Model: ', this.props.model),
            React.DOM.span({className: 'price'}, 'Price: ', this.props.price),
            React.DOM.button({className: 'delete_btn', onClick: this.deleteItem},
                React.DOM.span({className: 'btn_title'}, 'delete'),
            ),
            React.DOM.img({className: 'image', src: this.props.src, alt: 'mobile'}),
        )
    },
});