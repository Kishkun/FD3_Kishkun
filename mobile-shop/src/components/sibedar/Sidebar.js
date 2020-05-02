import React from "react";
import BasketCart from "../basketCart/BasketCart";
import Search from "../search/Search";

const Sidebar = () => {

    return (
        <div>
            <BasketCart/>
            <Search />
        </div>
    )
};

export default Sidebar;