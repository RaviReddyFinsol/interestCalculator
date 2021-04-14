import React from 'react'
import { Route, Switch } from 'react-router-dom';
import InterestCalculator from '../components/calculator/InterestCalculator'
import RatioStrategy from '../components/ratioStrategy/RatioStrategy'

function Router() {
    return (
        <Switch>
            <Route path='/ratio' component={RatioStrategy} />
            <Route exact path='/' component={InterestCalculator} />
        </Switch>
    )
}

export default Router;