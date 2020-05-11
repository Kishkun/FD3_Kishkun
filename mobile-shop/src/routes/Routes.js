import React from "react";
import {Switch, Route, withRouter} from "react-router";
import {HashRouter} from "react-router-dom";
import {
    CSSTransition,
    TransitionGroup
} from "react-transition-group";

import Phones from "../components/phones/Phones";
import Phone from "../components/phone/Phone";
import Basket from "../components/basket/Basket";

const Routes = withRouter(({location}) => (
    <TransitionGroup>
        <CSSTransition
            key={location.key}
            timeout={{enter: 800, exit: 0}}
            classNames="page"
            unmountOnExit
        >
            <Switch>
                <HashRouter>
                    <Route path="/" component={Phones} exact/>
                    <Route path="/basket" component={Basket}/>
                    <Route path="/categories/:id" component={Phones}/>
                    <Route path="/phones/:id" component={Phone}/>
                </HashRouter>
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

export default Routes;