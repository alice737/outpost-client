import React, { Component } from 'react'
import NavbarDetail from './NavbarDetail'
import Footer from './Footer'
import '../pagestyle/prices.css'

class Prices extends Component {
    render() {
        return (

            <div>
                <NavbarDetail />
                <div className="container" id="container100">
                    <h2 className="mb-5 font-weight-bold text-center">
                        <a name="cennik">Cennik</a>
                    </h2>
                </div>
                <div>
                    ceny
                    </div>
                <div>
                    ceny
                    </div>
                <Footer />
            </div>
        );
    }
}
export default Prices;