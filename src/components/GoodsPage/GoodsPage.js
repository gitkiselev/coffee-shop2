import React from 'react';
import Footer from '../Footer';
import HeaderMenu from '../HeaderMenu';
import girl from './coffee_girl.jpg';
import shopService from '../../service/shopService';
import Beans_logo_dark from '../logo/Beans_logo_dark.svg';
import './GoodsPage.css';

export default class CoffeePage extends React.Component {
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
    

    componentDidMount() {
        this.coffeeService.getAllItems()
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
            const {name, url, price, country} = item;
           
            return (
                 <div
                 onClick={(url) => {
                    this.props.history.push(url)
                }}
                 key={url} className="shop__item">
                    <img src={url} alt="coffee" />
                    <div className="shop__item-title">
                        {name}
                    </div>
                    <div className="shop__item-country">{country}</div>
                    <div className="shop__item-price">{price}$</div>
                </div> 
            )
        })
    }
    render() {
        const { itemList } = this.state;
        const content = this.renderItems(itemList);
        return(
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
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <img className="shop__girl" src={girl} alt="girl" />
                </div>
                <div className="col-lg-4">
                    <div className="title">About our beans</div>
                    <img className="beanslogo" src={Beans_logo_dark} alt="Beans logo" />
                    <div className="shop__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br /><br />
                        Afraid at highly months do things on at. Situation recommend objection do intention<br />
                        so questions. <br />
                        As greatly removed calling pleased improve an. Last ask him cold feel<br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                        is song that held help face.
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" htmlFor="filter">Looking for</label>
                        <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input" />
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="shop__filter">
                        <div className="shop__filter-label">
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                            <button className="shop__filter-btn">Brazil</button>
                            <button className="shop__filter-btn">Kenya</button>
                            <button className="shop__filter-btn">Columbia</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
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