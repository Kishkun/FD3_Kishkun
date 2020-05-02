import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as R from "ramda";

import {
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket,
    fetchCategories} from "../../actions";
import {getPhones} from "../../selectors/selectors";
import Layout from "../layout/Layout";

class Phones extends React.Component {

    componentDidMount() {
        this.props.fetchPhones();
        this.props.fetchCategories();
    }

    renderPhone = (phone) => {
        const showDescription = `${R.take(55, phone.description)}...`; //show 60 symbol description
        const {addPhoneToBasket} = this.props;

        return (
            <div className="col-sm-4 book-list" key={phone.id}>
                <div className="thumbnail">
                    <img
                        className="img-thumbnail castom-img"
                        src={phone.image}
                        alt={phone.name}
                    />
                    <div className="caption">
                        <h5 className="float-right">${phone.price}</h5>
                        <h5>
                            <Link to={`/phones/${phone.id}`}>
                                {phone.name}
                            </Link>
                        </h5>
                        <p>{showDescription}</p>
                        <p className="itemButton">
                            <button
                                className="btn btn-primary"
                                onClick={() => addPhoneToBasket(phone.id)}
                            >
                                Buy now!
                            </button>
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
        const {phones, loadMorePhones} = this.props;
        return (
            <Layout>
                <div className="books row">
                    {phones.map(phone => this.renderPhone(phone))}
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
        )
    }
}

const mapStateToProps = (state) => ({
    phones: getPhones(state)
});

const mapDispatchToProps = {
    fetchPhones,
    loadMorePhones,
    addPhoneToBasket,
    fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);