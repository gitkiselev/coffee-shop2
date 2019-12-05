import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ItemPage from '../src/components/coffeeItem';
import MainPage from '../src/components/MainPage';
import CoffeePage from '../src/components/CoffeePage';



export default class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (

            <Router>


                <div>
                    <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/OurCoffee' component={CoffeePage}/>
                    <Route exact path='/ItemPage' component={ItemPage}/>
                    </Switch>
                </div>

            </Router>

        )
    }
};