import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as R from "ramda";

import {
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket,
    fetchCategories
} from "../../actions";
import {getPhones, getVisiblePhones} from "../../selectors/selectors";
import Layout from "../layout/Layout";

class Phones extends React.Component {

    componentDidMount() {
        this.props.fetchPhones();
        this.props.fetchCategories();
    }

    renderPhone = (phone) => {
        //show 55 symbol description
        const showDescription = `${R.take(55, phone.description)}...`;
        const {addPhoneToBasket} = this.props;
        return (
            <div className="col-sm-6 col-lg-4 book-list" key={phone.id}>
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
        )
    };

    render() {
        const {filteredPhones, loadMorePhones, visiblePhones} = this.props;
        const isBtnVisible = visiblePhones.length < filteredPhones.length;
        return(
            <Layout>
                <div className="books row">
                    {visiblePhones.map(phone => this.renderPhone(phone))}
                </div>
                {
                    isBtnVisible &&
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-primary float-right"
                                    onClick={loadMorePhones}
                            >
                                Load More
                            </button>
                        </div>
                    </div>
                }
            </Layout>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    filteredPhones: getPhones(state, ownProps),
    visiblePhones: getVisiblePhones(state, ownProps)
});

const mapDispatchToProps = {
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket,
    fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);