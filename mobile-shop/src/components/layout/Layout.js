import React from "react";
import Sidebar from "../sibedar/Sidebar";

const Layout = (props) => {
    let {children} = props;
    return(
        <div className="view-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Layout;