import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import About from './About.jsx';
import TodoAppList from './TodoAppList';
import NotFound from './NotFound';

class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={About}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/todo" component={TodoAppList}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;