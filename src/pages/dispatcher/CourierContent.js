import React, { Component } from 'react'
import Courier from './Courier'



class CourierContent extends Component {
    render() {
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 id="nav-padd" className="h2">Kurierzy</h1>
                </div>
                <Courier />
            </main>

        );
    }
}

export default CourierContent;