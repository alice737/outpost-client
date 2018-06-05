import React, { Component } from 'react';
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import ChooseCourier from './ChooseCourier'
import { Link } from 'react-router-dom';

class CreatePlan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
            res: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    handleSubmit(event){
        // alert('A name was submitted: ' + this.state.packNumber);
        this.setState({ res: '1'});
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            //  mode: 'no-cors', // no-cors
            body: JSON.stringify({
              startDate: this.state.startDate
              
            })
            ,
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
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
                                <h1 id="nav-padd" className="h2"> Wybierz date na ktora chcesz utworzyc zmiane</h1>

                            </div>
                            <form className="form-signin" onSubmit={this.handleSubmit}>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange} />
                                <input type="submit" className="btn btn-primary" value="Prześlij" />
                            </form>
                            <Answer res={this.state.res}  />
                        </main>
                    </div>
                </div>
            </div>



        );
    }
}
export default CreatePlan;

function AnswerPositive(props) {
    return(
       <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 id="nav-padd" className="h2">Kurierzy</h1>
        
        </div>
        <ChooseCourier/>
       <Link to="/drag"> <input type="submit" className="btn btn-primary" value="Zapisz zmiany" /></Link>
  </div>
    
    );  
  }
  
  function AnswerNegative(props) {
    return <h1>Podana paczka nie znajduje się w systemie.</h1>;
  }
function Answer(props) {
    const res= props.res;
    if (!props.res) {
        return null;
      }
      
    if (res==='1') {
      return <AnswerPositive />;
    }
    else if(res==='err')
    {
    return <AnswerNegative/>;
}
 
}