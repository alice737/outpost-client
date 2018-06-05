import React, { Component } from 'react';
import DispatcherNav from '../dispatcher/DispatcherNav';
import MyAccountNav from './MyAccountNav'

class MyParcels extends Component {
    constructor(){
        super();
        this.state={
            packNumber:'',
            status: '',
            res:''
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        if (e.target.id === 'packNumber') {
            this.setState({ packNumber: e.target.value });
        } 

    }
    handleSubmit(event){
        // alert('A name was submitted: ' + this.state.packNumber);
        this.setState({ res: '1'});
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            //  mode: 'no-cors', // no-cors
            body: JSON.stringify({
                packNumber: this.state.packNumber
              
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
                        <MyAccountNav />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h1 id="nav-padd" className="h2">Moje przesyłki</h1>

                            </div>
                            <div className="container">
                    <h2 className="font-weight-bold text-center">Śledzenie przesyłki</h2>
                    <h4 className="text-center"> Wpisz numer przesyłki.</h4>
                    <div className="row">
                        <form className="form-signin" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input className="form-control" id="packNumber" placeholder="Wpisz numer paczki" onChange={this.handleChange} required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Prześlij</button>
                           
                        </form>
                        <Answer res={this.state.res} status={this.state.status} />
                    </div>
                </div>
                </main>
                    </div>
                </div>
            </div>
        );
    }
}
export default MyParcels;
function AnswerPositive(props) {
    return <h1>Podana paczka znajduję się w systemie o statusie {props.status}</h1>;
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