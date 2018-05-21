import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer font-small mdb-color unique-color-dark pt-4 mt-4" id="main-footer" >
          <div className="foot-col">
            <div className="container">

              <div className="row">
                <div className="col-sm-3">
                  <p>Przydatne linki
            </p>
                </div>
                <div className="col-sm-3">
                  <p>
                    <a href="">WYŚLIJ PACZKĘ</a>
                  </p>
                  <p>
                    <a >PUNKT OBSŁUGI PACZEK</a>
                  </p>
                </div>
                <div className="col-sm-3">
                  <p>
                    <Link to="/tack">ŚLEDŹ PACZKĘ</Link>
                  </p>
                  <p>
                    <Link to="/complaint">REKLAMACJA</Link>
                  </p>
                </div>
                <div className="col-sm-3">
                  <p>
                    <a href="">OBSŁUGA KLIENTA</a>
                  </p>

                  <p>
                    <a href="">POMOC</a>
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="container text-center text-md-left">
            <div className="row my-4">


              <div className="col-md-4 col-lg-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">OutPost</h5>
                <p>to do </p>
                <p>to do </p>
              </div>


              <hr className="clearfix w-100 d-md-none" />


              <div className="col-md-2 col-lg-2 ml-auto">
                <h5 className="text-uppercase mb-4 font-weight-bold">O nas</h5>
                <ul className="list-unstyled">
                  <p>
                    <a href="">KARIERA</a>
                  </p>
                  <p>
                    <a href="">O NAS</a>
                  </p>
                  <p>
                    <a href="">BLOG</a>
                  </p>
                  <p>
                    <a href="">NAGRODY</a>
                  </p>
                </ul>
              </div>


              <hr className="clearfix w-100 d-md-none" />


              <div className="col-md-4 col-lg-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">Adres</h5>

                <p>
                  <i className="fa fa-home mr-3"></i> Krakow, Polska</p>
                <p>
                  <i className="fa fa-envelope mr-3"></i> outpost@outpost.com</p>
                <p>
                  <i className="fa fa-phone mr-3"></i> 900 800 700</p>
                <p>
                  <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
              </div>


              <hr className="clearfix w-100 d-md-none" />


              <div className="col-md-2 col-lg-2 text-center">
                <h5 className="text-uppercase mb-4 font-weight-bold">Śledź nas</h5>

                <div className="mt-2">

                  <a className="fb-ic mr-3">
                    <i className="fa fa-lg fa-facebook"> </i>
                  </a>

                  <a className="tw-ic mr-3">
                    <i className="fa fa-lg fa-twitter"> </i>
                  </a>

                  <a className="gplus-ic mr-3">
                    <i className="fa fa-lg fa-google-plus"> </i>
                  </a>

                  <a className="li-ic mr-3">
                    <i className="fa fa-lg fa-linkedin"> </i>
                  </a>

                  <a className="ins-ic mr-3">
                    <i className="fa fa-lg fa-instagram"> </i>
                  </a>

                  <a className="dribbble-ic mr-3">
                    <i className="fa fa-lg fa-dribbble"> </i>
                  </a>

                  <a className="email-ic">
                    <i className="fa fa-lg fa-envelope-o"> </i>
                  </a>


                </div>
              </div>


            </div>
          </div>

          <div className="footer-copyright py-3 text-center">
            © 2018 Copyright:
      <a href=""> OutPost </a>
          </div>


        </footer>
      </div>
    );
  }
}
export default Footer;