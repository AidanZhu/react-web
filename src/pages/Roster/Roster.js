import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import FullRoster from './FullRoster';
import {Player} from '../Player/Player';

// The Roster component matches one of two different routes
// depending on the full pathname
export default class Roster extends Component{
    render() { 
            return (
            <Switch>
            <Route exact path='/roster' component={FullRoster}/>
            <Route path='/roster/:number' component={Player}/>
            </Switch>
        );
    }
}