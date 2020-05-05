import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {
    getTotalBasketCount,
    getTotalBasketPrice
} from "../../selectors/selectors"

class BasketCart extends React.Component {

    render() {
        const {totalBasketCount, totalPrice} = this.props;

        const iconStyle = (totalBasketCount) ? "icon anime" : "icon";

        return (
            <div className="cart">
                <div className="dropdown">
                    <Link
                        to="/basket"
                        id="dLabel"
                        className="btn btn-inverse btn-block btn-lg"
                    >
                    <span className={iconStyle}>
                        <i className="fa fa-shopping-cart"></i>
                    </span>
                        <span className="price-info">
                        {totalBasketCount} item(s) - ${totalPrice}
                    </span>
                    </Link>
                </div>
            </div>
        )
    }
}
// получение общей суммы и количества телефонов
const mapStateToProps = (state) => {
    return {
        totalBasketCount: getTotalBasketCount(state),
        totalPrice: getTotalBasketPrice(state)
    }
};

export default connect(mapStateToProps, null)(BasketCart);