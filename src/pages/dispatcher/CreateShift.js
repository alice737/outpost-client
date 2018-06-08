import React, { Component } from 'react';
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import ChooseCourier from './ChooseCourier'
import { Link } from 'react-router-dom';
import CouriersToShift from '../parcel/CouriersToShift'

class CreateShift extends Component {
    constructor(props) {
        super(props)
        this.state = {
           shiftname: '',
           res: ''
          
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            shiftname: e.target.value
        });
        
    }
    handleSubmit(event) {
        //on update 
        this.setState({ res: '1'});
        event.preventDefault();
        let url = 'http://193.33.111.170:8080/dispatcher/createShift';
        fetch(url, {
            method: 'POST',
            // mode: 'no-cors', // no-cors
            body: JSON.stringify({
        name: this.state.shiftname
            })
            ,
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(function (response) {
            if (!response.ok) {
                alert('Sprawdź czy dane są poprawne.')
                throw Error(response.statusText);
                console.log(response.statusText);
            }
            return response;
        }).then(function (response) {
            console.log("ok");
            alert('Zmiana stworzona ')
         
        }).catch(function (error) {

            console.log(error);

        });


    }
   
    render() {

        return (
            <div>
                <div className="container-fluid" id="container-wi">
                    <div className="row">
                        <DispatcherNav />
                        <LeftNav />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h2 id="nav-padd" className="h2"> Wpisz nazwę nowej zmiany </h2>

                            </div>
                            <form className="form-signin" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                    <label >Nazwa zmiany</label>
                                    <input type="text" className="form-control" id="shiftname"  onChange={this.handleChange} required />
                                </div>
                                <input type="submit" className="btn btn-primary" value="Prześlij" />
                            </form>
                            <Answer res={this.state.res} name={this.state.shiftname}  />
                        </main>
                    </div>
                </div>
            </div>

        );
    }
}
export default CreateShift;
function Answer(props) {
    const res= props.res;
    const name=props.name;

    if (!props.res) {
        return null;
      }
      
    if (res==='1') {
      return <CouriersToShift name={name} />;
    }
    else if(res==='err')
    {
    return null;
}
 
}

