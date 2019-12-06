import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GoodsPage from '../src/components/GoodsPage';
import MainPage from '../src/components/MainPage';
import CoffeePage from '../src/components/CoffeePage';
import ItemPage from '../src/components/ItemPage';



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
                        <Route exact path='/GoodsPage' component={GoodsPage}/>
                        <Route exact path='/ItemPage' component={ItemPage}/>
                        <Route path='/GoodsPage/:name' exact render={
                                ({match}) => {
                                    const {url} = match.params;
                                    return <ItemPage name={url}/>
                                }
                            } /> 
                    </Switch>
                </div>

            </Router>

        )
    }
};