import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo/Logo.svg';
export default class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <ul className="header">
                    
                    <li className="header__item">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link to="/OurCoffee">Our coffee</Link>
                    </li>
                    <li className="header__item">
                        <Link to="/GoodsPage">For your pleasure</Link>
                    </li>
                    <li className="header__item">
                        <Link to="/ItemPage">Временно ItemPage</Link>
                    </li>
                    
                
            </ul>
        )
    }
}