import React, { Component } from 'react'

class News extends Component {

    render() {
        let data = new Date();

        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                    <h1 id="nav-padd" className="h2">Aktualności</h1>
                </div>
                <h2> Dziś jest {data.toLocaleDateString()} r</h2>
                <div>
                <h4>  </h4>
                </div>
            </main>
        );

    }
}

export default News;