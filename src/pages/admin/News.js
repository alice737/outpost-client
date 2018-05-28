import React, { Component } from 'react'
//import { Link } from 'react-router-dom';



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
                {/* <p>Wszystko jak na razie idzie w porządku po woli do celu. </p> */}
                
                </div>

{/* <img src="https://img-ovh-cloud.zszywka.pl/1/0169/8531-powoli-i-wytrwale-daz-do-celu-.jpg"  alt="W3Schools.com"/> */}


            </main>
        );

    }
}

export default News;