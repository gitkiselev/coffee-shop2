import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

import Beans_logo from '../logo/Beans_logo.svg';

import About from '../About';
import Footer from '../Footer';
import HeaderMenu from '../HeaderMenu';
import shopService from '../../service/shopService';
import {withRouter} from 'react-router-dom';
const uuidv4 = require('uuid/v4');
 
class MainPage extends React.Component {
    coffeeService = new shopService();
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            error: false,
            loading: true
        }
    }
    
    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    
    onClickItem = (id) => {
        console.log('id: ' + id)
        this.props.history.push('/ItemPage/' + id);

    }

    componentDidMount() {
        this.coffeeService.getAllBestItems()
        .then((itemList) => {
            this.setState({
                itemList,
                loading: false
            })
        })
    }

    onError = () => {
        this.setState({
          error: true,
          loading: false
        });
      };

    renderItems = (arr) => {
        
        return arr.map((item) => {
            const {name, url, price} = item;
            const id = uuidv4();
            return (
                <div id={id} key={url} 
                onClick = {() => this.onClickItem(id) }
                 className="best__item">
                    <img src={url} alt="coffee"/>
                    <div className="best__item-title">
                        {name}
                    </div>
                    <div className="best__item-price">{price}$</div>
                </div>
            )
        })
    }




    render () {
        const { itemList } = this.state;
        const content = this.renderItems(itemList);
        return (
            <>
        <div className="preview">
       <div className="container">
           <div className="row">
               <div className="col-lg-6">
                    <header>
                        <HeaderMenu />
                    </header>
               </div>
           </div>
           <div className="row">
               <div className="col-lg-10 offset-lg-1">
                   <h1 className="title-big">Everything You Love About Coffee</h1>
                    <img className="beanslogo" src={Beans_logo} alt="Beans logo" />
                    <div className="preview__subtitle">We makes every day full of energy and taste</div>
                    <div className="preview__subtitle">Want to try our beans?</div>
                    <Link to="/OurCoffee" className="preview__btn">More</Link>
               </div>
           </div>
       </div>
    </div>
    <About />
    
    <section className="best">
        <div className="container">
            <div className="title">Our best</div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="best__wrapper">
                        {content}
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

export default withRouter(MainPage);