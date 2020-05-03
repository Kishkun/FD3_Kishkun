import React from "react";
import {Switch, Route} from "react-router";
import Phones from "../components/phones/Phones";
import Phone from "../components/phone/Phone";

const routes = (
    <Switch>
        <Route path="/" component={Phones} exact />
        <Route path="/categories/:id" component={Phones} />
        <Route path="/phones/:id" component={Phone} />
    </Switch>
);

export default routes;