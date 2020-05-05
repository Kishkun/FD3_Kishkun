import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as R from "ramda";

import {
    TransitionGroup,
    CSSTransition,
    Transition
} from "react-transition-group";

import {
    getTotalBasketPrice,
    getBasketPhonesWithCount
} from "../../selectors/selectors"

import {
    removePhoneFromBasket,
    cleanBasket,
    basketCheckout
} from "../../actions";

const Basket = (props) => {
    let {
        phones,
        totalPrice,
        removePhoneFromBasket,
        cleanBasket,
        basketCheckout
    } = props;

    const isBasketEmpty = R.isEmpty(phones);
    const renderContent = () => {
        return (
            <div>
                <div
                    className={isBasketEmpty ? "empty-block show" : "empty-block"}>
                    Your shopping cart is empty</div>
                <div className="info-block">
                    <TransitionGroup>
                        {phones.map((phone) => (
                            <CSSTransition
                                timeout={300}
                                classNames="item"
                                key={phone.id}>
                                <div className="item-inner">
                                    <div className="item-td">
                                        <img
                                            className="img-thumbnail"
                                            src={phone.image}
                                            alt={phone.name}
                                        />
                                    </div>
                                    <div className="item-td">{phone.name}</div>
                                    <div className="item-td">${phone.price}</div>
                                    <div className="item-td">{phone.count}</div>
                                    <div className="item-td">
                                    <span
                                        className="delete-cart"
                                        onClick={() => removePhoneFromBasket(phone.id)}
                                    ></span>
                                    </div>
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                {
                    R.not(isBasketEmpty) &&
                    <div className="row">
                        <div className="total-user-checkout">
                            <b>Total:</b>
                            ${totalPrice}
                        </div>
                    </div>
                }
            </div>
        )
    };
    const renderSidebar = () => {
        return (
            <div className="option-btn">
                <Link
                    to="/"
                    className="btn btn-block btn-info"
                >
                    <i className="fa fa-info"></i>
                    <span className="btn-title">Continue shopping!</span>
                </Link>
                <Transition
                    in={!isBasketEmpty}
                    timeout={300}
                    mountOnEnter
                    unmountOnExit
                >
                    <div className="basket_service-btn">
                        <button
                            onClick={cleanBasket}
                            className="btn btn-block btn-danger"
                        >
                            <i className="fa fa-trash-o"></i>
                            <span className="btn-title">Clear cart</span>
                        </button>
                        <button
                            className="btn btn-block btn-success"
                            onClick={() => basketCheckout(phones)}
                        >
                            <i className="fa fa-envelope-o"></i>
                            <span className="btn-title">Checkout</span>
                        </button>
                    </div>
                </Transition>
            </div>
        )
    };
    return (
        <div className="view-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {renderContent()}
                    </div>
                    <div className="col-md-3">
                        {renderSidebar()}
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        phones: getBasketPhonesWithCount(state),
        totalPrice: getTotalBasketPrice(state)
    }
};

const mapDispatchToProps = {
    removePhoneFromBasket,
    cleanBasket,
    basketCheckout
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);