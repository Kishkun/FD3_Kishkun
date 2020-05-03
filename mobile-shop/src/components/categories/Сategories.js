import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import {compose} from "redux";
import classNames from "classnames";

import {
    getCategories,
    getActiveCategoryId
} from "../../selectors/selectors";
import * as R from "ramda";

const Categories = ({categories, activeCategoryId}) => {
    const renderCategories = (item) => {
        const linkClass = classNames({
            "list-group-item": true,
            "active": getActiveState(item)
        });
        return (
            <Link
                to={`/categories/${item.id}`}
                className={linkClass}
                key={item.id}
            >
                {item.name}
            </Link>
        )
    };

    // прверяем чтоб проперти обьекта равнялось чему то (id)
    const getActiveState = R.propEq("id", activeCategoryId);

    const renderAllCategories = () => {
        const linkClass = classNames({
            "list-group-item": true,
            "active": R.isNil(activeCategoryId) // проверка на null или undefined
        });
        return (
            <Link
                to="/"
                className={linkClass}
            >
                All
            </Link>
        )
    };

    return (
        <div className="well">
            <h4>Brand</h4>
            <div className="list-group">
                {renderAllCategories()}
                {categories.map(item => renderCategories(item))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownProps)
});

export default compose(
    withRouter,
    connect(mapStateToProps, null)
)(Categories);