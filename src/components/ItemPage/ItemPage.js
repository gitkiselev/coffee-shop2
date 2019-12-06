import React from 'react';
import Footer from '../Footer';
import HeaderMenu from '../HeaderMenu';
import './ItemPage.css';
import coffeeItem from './item.jpg';
import Beans_logo_dark from '../logo/Beans_logo_dark.svg';
//import shopService from '../../service/shopService';


export default class ItemPage extends React.Component {
    //coffeeService = new shopService();
    state = {
        selectedItem: null
    }
    render() {
        
        return (
            <>
            <div className="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                     <header>
                     <HeaderMenu />
                     </header>
                </div>
            </div>
            <h1 className="title-big">Our Coffee</h1>
        </div>
    </div>
    <section className="shop">
        <div className="container">


            <div 
            id={this.props.name}
            
            className="row">
                <div className="col-lg-5 offset-1">
                    <img className="shop__girl" src={coffeeItem} alt="coffee_item" />
                </div>
                <div className="col-lg-4">
                    <div className="title">About it</div>
                    <img className="beanslogo" src={Beans_logo_dark} alt="Beans logo" />
                    <div className="shop__point">
                        <span>Country:</span>
                        Brazil
                    </div>
                    <div className="shop__point">
                        <span>Description:</span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="shop__point">
                        <span>Price:</span>
                        <span className="shop__point-price">16.99$</span>
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