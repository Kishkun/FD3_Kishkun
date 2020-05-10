import React from "react";
import Sidebar from "../sibedar/Sidebar";

const Layout = (props) => {
    let {children} = props;
    return(
        <div className="view-container">
            <div className="container">
                <div className="row">
                    <div className="header"><h1>Mobile Store</h1></div>
                </div>
                <div className="row">
                    <div className="col-md-5 col-lg-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-7 col-lg-9">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Layout;