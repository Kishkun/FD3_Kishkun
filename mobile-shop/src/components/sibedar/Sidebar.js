import React from "react";
import BasketCart from "../basketCart/BasketCart";
import Search from "../search/Search";
import Categories from "../categories/Сategories";

const Sidebar = () => {

    return (
        <div>
            <BasketCart/>
            <Search/>
            <Categories/>
        </div>
    )
};

export default Sidebar;