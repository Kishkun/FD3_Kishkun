import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {
    getTotalBasketCount,
    getTotalBasketPrice
} from "../../selectors/selectors"

const BasketCart = (props) => {
    let {totalBasketCount, totalPrice} = props;
    return(
        <div className="cart">
            <div className="dropdown">
                <Link
                    to="basket/"
                    id="dLabel"
                    className="btn btn-inverse btn-block btn-lg"
                >
                    <i className="fa fa-fa-shopping-cart"></i>
                    <span>
                        {totalBasketCount} item(s) - ${totalPrice}
                    </span>
                </Link>
            </div>
        </div>
    )
};
// получение общей суммы и количества телефонов
const mapStateToProps = (state) => {
  return{
      totalBasketCount: getTotalBasketCount(state),
      totalPrice: getTotalBasketPrice(state)
  }
};

export default connect(mapStateToProps, null)(BasketCart);