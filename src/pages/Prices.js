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
                    <h3 className="  mb-5 font-weight-bold "> Kurier
                    </h3>
                    <h4 className=" mb-5 font-weight-bold "> Rozmiar paczki 
                   
                    <div className="table-responsive">
                            <table className="table ">
                                <thead>
                                    <tr>

                                        <th></th>
                                        <th>Cena brutto</th>
                                        <th>Opis</th>
                                      

                                    </tr>
                                </thead>
                                <tbody>              
                                        <tr>
                                            <td> GABARYT A</td>
                                            <td> 13,50 zł</td>
                                            <td> Maksymalne wymiary: 8 x 38 x 64 cm</td>
                                        
                                        </tr> 
                                        <tr>
                                            <td> GABARYT B</td>
                                            <td> 16,99 zł</td>
                                            <td> Maksymalne wymiary: 19 x 38 x 64 cm</td>
                                        
                                        </tr>          
                                        <tr>
                                            <td> GABARYT C</td>
                                            <td> 19,99 zł</td>
                                            <td> Maksymalne wymiary: 41 x 38 x 64 cm</td>
                                        
                                        </tr>  
                                        <tr>
                                            <td> GABARYT D</td>
                                            <td> 28,99 zł</td>
                                            <td> Maksymalne wymiary: 50 x 50 x 80 cm. Paczkę o gabarycie D nadasz w Punkcie Obsługi Paczek lub zamawiając kuriera (za dopłatą)</td>
                                        
                                        </tr>                        
                                </tbody>
                            </table>
                            </div>
                            </h4>
                    <h4 className=" font-weight-bold "> Dopłaty
                    </h4>
                    <div className="table-responsive">
                            <table className="table ">
                                <thead>
                                    <tr>

                                        <th></th>
                                        <th>Cena brutto</th>
                                        <th>Opis</th>
                                      

                                    </tr>
                                </thead>
                                <tbody>              
                                        <tr>
                                            <td> DOPŁATA ZA ODBIÓR PRZEZ KURIERA</td>
                                            <td> 6,00 zł</td>
                                            <td> Opłata naliczana przy nadaniu do 4 paczek.</td>
                                        
                                        </tr> 
                                        <tr>
                                            <td> OPŁATA PALIWOWA</td>
                                            <td> 0,00 zł</td>
                                            <td> Opłata paliwowa nie jest naliczana w przypadku klientów indywidualnych.</td>
                                        
                                        </tr>                                     
                                </tbody>
                            </table>
                            </div>
                            <h3 className="  mb-5 font-weight-bold "> Paczkomat
                    </h3>
                    <h4 className=" mb-5 font-weight-bold "> Rozmiar paczki 
                   
                    <div className="table-responsive">
                            <table className="table ">
                                <thead>
                                    <tr>

                                        <th></th>
                                        <th>Cena brutto</th>
                                        <th>Opis</th>
                                      

                                    </tr>
                                </thead>
                                <tbody>              
                                        <tr>
                                            <td> GABARYT A</td>
                                            <td> 11,28 zł</td>
                                            <td> Maksymalne wymiary: 8 x 38 x 64 cm, waga do 25 kg</td>
                                        
                                        </tr> 
                                        <tr>
                                            <td> GABARYT B</td>
                                            <td> 12,60 zł</td>
                                            <td> Maksymalne wymiary: 19 x 38 x 64 cm, waga do 25 kg</td>
                                        
                                        </tr>          
                                        <tr>
                                            <td> GABARYT C</td>
                                            <td> 15,92 zł</td>
                                            <td> Maksymalne wymiary: 41 x 38 x 64 cm, waga do 25 kg</td>
                                        
                                        </tr>  
                                       
                                </tbody>
                            </table>
                            </div>
                            </h4>
                    <h4 className=" font-weight-bold "> Dopłaty
                    </h4>
                    <div className="table-responsive">
                            <table className="table ">
                                <thead>
                                    <tr>

                                        <th></th>
                                        <th>Cena brutto</th>
                                        <th>Opis</th>
                                      

                                    </tr>
                                </thead>
                                <tbody>              
                                        <tr>
                                            <td> DOPŁATA ZA ODBIÓR PRZEZ KURIERA</td>
                                            <td> 4,30 zł</td>
                                            <td> Opłata naliczana przy nadaniu do 5 paczek i więcej jest bezpłatny.</td>
                                        
                                        </tr> 
                                        <tr>
                                            <td> OPŁATA PALIWOWA</td>
                                            <td> 0,00 zł</td>
                                            <td> Opłata paliwowa nie jest naliczana w przypadku klientów indywidualnych.</td>
                                        
                                        </tr>                                     
                                </tbody>
                            </table>
                            </div>
                </div>
             
                <Footer />
            </div>
        );
    }
}
export default Prices;