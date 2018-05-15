import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


class Complaint extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div className="container">
                    <h2 className="mb-5 font-weight-bold text-center">
                        Reklamacja
                    </h2>


                    <form>


                        <label >Nazwa zgłaszającego</label>
                        <input type="text" id="ContactName" className="form-control" />




                        <label >Numer Paczki</label>
                        <input type="email" id="packNumber" className="form-control" />




                        <label >Telefon</label>
                        <input type="text" id="telephoneNumber" className="form-control" />


                        <label  >Email</label>
                        <input type="email" id="contactEmail" className="form-control" />



                        <label >Temat</label>
                        <input type="email" id="contactSubject" className="form-control" />






                        <label for="defaultFormContactMessageEx" >Opis reklamacji</label>
                        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3"></textarea>

                        <div className="text-center mt-4">
                            <button className="btn btn-primary" type="submit">Prześlij<i className="fa fa-paper-plane-o ml-2"></i></button>
                        </div>
                    </form>



                </div>
                <Footer />
            </div>
        );
    }
}
export default Complaint;