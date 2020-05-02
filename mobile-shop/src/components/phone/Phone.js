import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as R from "ramda";

import {
    fetchPhoneById,
    addPhoneToBasket
} from "../../actions";
import {getPhoneById} from "../../selectors/selectors";
import BasketCart from "../basketCart/BasketCart";

class Phone extends React.Component {

    componentDidMount() {
        this.props.fetchPhoneById(this.props.match.params.id);
    }

    renderFields = (phone) => {
        // композиция методов(справо на лево): получение двухмерного массива
        const columnFields = R.compose(
            // преобразует в массив ключ значения, делает парой
            R.toPairs,
            // возьмем те поля которые сейчас опишем
            R.pick([
                "cpu",
                "camera",
                "size",
                "weight",
                "display",
                "battery",
                "memory",
            ])
        )(phone);

        return (
            columnFields.map(([key, value]) => {
                return (
                    <div className="column" key={key}>
                        <div className="ab-details-title">
                            {key}
                        </div>
                        <div className="ab-details-info">
                            {value}
                        </div>
                    </div>
                )
            })
        )
    };

    renderContent = () => {
        const {phone} = this.props;

        return (
            <div className="thumbnail">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={phone.image}
                            alt={phone.name}
                            className="img-thumbnail castom-img"
                        />
                    </div>
                    <div className="col-md-6">
                        {this.renderFields(phone)}
                    </div>
                </div>
                <div className="caption-full">
                    <h4 className="float-right">${phone.price}</h4>
                    <h4>{phone.name}</h4>
                    <p>{phone.description}</p>
                </div>
            </div>
        )
    };

    renderSidebar = () => {
        const {phone, addPhoneToBasket} = this.props

        return (
            <div>
                <p className="lead">Quick shop</p>
                <BasketCart/>
                <div className="form-group">
                    <h1>{phone.name}</h1>
                    <h2>${phone.price}</h2>
                    <Link
                        to="/"
                        className="btn btn-info btn-block"
                    >Back to store
                    </Link>
                    <button
                        type="button"
                        className="btn btn-success btn-block"
                        onClick={() => addPhoneToBasket(phone.id)}
                    >Add to cart
                    </button>
                </div>
            </div>
        )
    };

    render() {
        let {phone} = this.props;

        return (
            <div className="view-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            {phone ? this.renderContent() : null}
                        </div>
                        <div className="col-md-3">
                            {phone ? this.renderSidebar() : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    phone: getPhoneById(state, state.phonePage.id)
});
const mapDispatchToProps = {
    fetchPhoneById,
    addPhoneToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);