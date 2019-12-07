import React from 'react';
import Footer from '../Footer';
import HeaderMenu from '../HeaderMenu';
import './ItemPage.css';

import Beans_logo_dark from '../logo/Beans_logo_dark.svg';
import shopService from '../../service/shopService';
const uuidv4 = require('uuid/v4');

export default class ItemPage extends React.Component {
    state = {
        item: [],
        error: false,
        loading: false,
      }
    coffeeService = new shopService();
    componentDidMount() {
        
    }
    
    render() {
        const {name, url, country, price, description} = this.props;
        return (
            <>
            <div key={uuidv4()} className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <header>
                            <HeaderMenu />
                            </header>
                        </div>
                    </div>
                    <h1 className="title-big">{name}</h1>
                </div>
    </div>
    <section className="shop">
        <div className="container">


            <div 
            
            
            className="row">
                <div className="col-lg-5 offset-1">
                    <img className="shop__girl" src={url} alt="coffee_item" />
                </div>
                <div className="col-lg-4">
                    <div className="title">About it</div>
                    <img className="beanslogo" src={Beans_logo_dark} alt="Beans logo" />
                    <div className="shop__point">
                        <span>Country:</span>
                        {country}
                    </div>
                    <div className="shop__point">
                        <span>Description:</span>
                        {description}
                    </div>
                    <div className="shop__point">
                        <span>Price:</span>
                        <span className="shop__point-price">{price}$</span>
                    </div>
                </div>
            </div>



        </div>
    </section>
    <Footer />
    </>
        )
    }
}