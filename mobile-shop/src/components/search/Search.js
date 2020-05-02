import React from "react";
import {connect} from "react-redux";

import {searchPhone} from "../../actions";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchPhone(this.state.value);
    };

    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    render() {
        return (
            <div className="well blosd">
                <h3 className="lead">Quick shop</h3>
                <div className="input-group">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            defaultValue={this.state.value}
                            placeholder="Search..."
                        />
                    </form>
                    <span className="input-group-btn">
                        <button className="btn btn-default">
                            <i className="fa fa-search"></i>
                        </button>
                     </span>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    searchPhone
};

export default connect(null, mapDispatchToProps)(Search);