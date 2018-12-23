import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './Home/Home';
import ItemPage from './ItemPage/ItemPage'
import NotFound from './NotFound';
class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path="/"
                    exact render={() => <Home {...this.props}/>}
                />
                <Route
                    path="/item"
                    exact render={() => <ItemPage {...this.props}/>}
                />
                <Route
                    component={NotFound}
                />
            </Switch>
        );
    }
}


export default Routes;