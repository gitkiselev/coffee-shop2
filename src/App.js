import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
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

                <div>
                    <Switch>
                        <Route exact path='/' component={MainPage}/>
                        <Route exact path='/OurCoffee' component={CoffeePage}/>
                        <Route exact path='/GoodsPage' component={GoodsPage}/>
                        {/* <Route exact path='/ItemPage' component={ItemPage}/> */}
                        <Route path='/ItemPage/:name' render={
                                ({match}) => {
                                    const {name} = match.params;
                                    return <ItemPage name={name}/>
                                }
                            } /> 
                    </Switch>
                </div>

            

        )
    }
};