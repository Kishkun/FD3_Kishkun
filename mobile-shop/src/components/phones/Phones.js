import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as R from "ramda";

import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

import {
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket,
    fetchCategories,
    toggleIsFetching
} from "../../actions";
import {getPhones} from "../../selectors/selectors";
import Layout from "../layout/Layout";

class Phones extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(false);
        this.props.fetchPhones();
        this.props.fetchCategories();
    }

    // componentWillUnmount() {
    //     this.props.toggleIsFetching(false);
    // }

    renderPhone = (phone) => {
        //show 55 symbol description
        const showDescription = `${R.take(55, phone.description)}...`;
        const {addPhoneToBasket} = this.props;
        return (
            <CSSTransition
                key={phone.id}
                timeout={300}
                classNames="item"
            >
                <div className="col-sm-4 book-list">
                    <div className="thumbnail">
                        <img
                            className="img-thumbnail castom-img"
                            src={phone.image}
                            alt={phone.name}
                        />
                        <div className="caption">
                            {
                                phone.price ?
                                    <h5 className="float-right">${phone.price}</h5> :
                                    <h6 className="float-right">discontinued</h6>
                            }
                            <h5>
                                <Link to={`/phones/${phone.id}`}>
                                    {phone.name}
                                </Link>
                            </h5>
                            <p>{showDescription}</p>
                            <p className="itemButton">
                                {
                                    phone.price ?
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => addPhoneToBasket(phone.id)}
                                        >
                                            Buy now!
                                        </button> :
                                        <button
                                            className="btn btn-danger"
                                            disabled
                                        >
                                            Buy not!
                                        </button>
                                }
                                <Link
                                    to={`/phones/${phone.id}`}
                                    className="btn btn-default"
                                >
                                    More info
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        )
    };

    render() {
        const {phones, loadMorePhones, isFetching} = this.props;
        return <>
            {
                isFetching ?
                    <div className="preloader">
                        <img src="./images/preloader.gif" alt="preloader"/>
                    </div> :
                    null
            }
            <Layout>
                <div className="books row">
                    <TransitionGroup>
                        {
                            phones.map(phone => this.renderPhone(phone))
                        }
                    </TransitionGroup>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-primary float-right"
                                onClick={loadMorePhones}
                        >
                            Load More
                        </button>
                        <div className="pagination-block">
                            <button className="btn btn-outline-primary"
                                // onClick={loadMorePhones}
                            >
                                1
                            </button>
                            <button className="btn btn-outline-primary"
                                // onClick={loadMorePhones}
                            >
                                2
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    }
}

const mapStateToProps = (state, ownProps) => ({
    phones: getPhones(state, ownProps),
    isFetching: state.phonesPage.isFetching
});

const mapDispatchToProps = {
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket,
    fetchCategories,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);