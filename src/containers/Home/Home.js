import './Home.css';
import React, {Component} from 'react';
import Navbar from '../../components/Navbar.js'
import Category from "../../components/Category";
import Carousel from "../../components/Carousel";
import ListView from "../../components/ListView";
import Footer from '../../components/Footer';
import items from '../../Data/data';

class Home extends Component {
    render() {
        return (
            <div className="App body">
                {/* Navigation */}
                <Navbar/>
                {/* Page Content */}
                <div className="container">
                    <div className="row">
                        <Category/>
                        {/* /.col-lg-3 */}
                        <div className="col-lg-9">
                            <Carousel items = {items}/>
                            <ListView items={items} getItem={this.getItem}/>
                            {/* /.row */}
                        </div>
                        {/* /.col-lg-9 */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
                {/* Footer */}
                <Footer/>
            </div>
        );
    }
}

export default Home;