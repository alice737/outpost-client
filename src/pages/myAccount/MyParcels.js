import React, { Component } from 'react';
import DispatcherNav from '../dispatcher/DispatcherNav';
import MyAccountNav from './MyAccountNav'
import axios from 'axios';
class MyParcels extends Component {
    constructor(){
        super();
        this.state={
            packNumber:'',
           
            res:'',
            track:[
                
            ]
            
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
        event.preventDefault();
        let url='http://193.33.111.170:8080/guest/checkParcelStatus/'+this.state.packNumber
    axios.get(url)
            .then(response => {
                this.setState({
                    track: response.data,
                  
                });
                    if(this.state.track.length===0){
                        this.setState({ res: 'err'});
                   
                    }else{
                        this.setState({ res: '1'});
                    }
                  
                }).catch((err) => {
                //   
                this.setState({ res: 'err'});
               
            
            } );
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
                        <Answer res={this.state.res} packNumber={this.state.packNumber} />
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

export class AnswerPositive extends React.Component {
    constructor(props){
        super();
        this.state={
            packNumber: props.packNumber,
            track:[
                {},
                {}
            ]
            
        };
        this.fun=this.fun.bind(this);
    }

    componentDidMount(){
            // alert('A name was submitted: ' + this.state.packNumber);
            
          
            let url='http://193.33.111.170:8080/guest/checkParcelStatus/'+this.state.packNumber
        axios.get(url)
                .then(response => {
                    this.setState({
                        track: response.data,      
                    });
                        console.log(response);
                    }).catch((err) => {
                
                } );
        }
        fun(data){
            var myDate = new Date(data *1000);
            return  myDate.toLocaleString()
        }
        render(){
         
           
        return (
            <div className="table-responsive">
      
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Numer paczki </th>
                        <th>Data </th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
               
                    {this.state.track.map((item, index) => (
                        <tr key={index}>
                            <td> {item.id}</td>
                            <td> {this.fun(item.timestamp)}</td>
                            <td> {item.status}</td>
                    
                        </tr>
                    ))}
            
                </tbody>
            </table>
           
        </div>
       
    );
        }
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
        
      return <AnswerPositive packNumber={props.packNumber} />;
    }
    else if(res==='err')
    {
    return <AnswerNegative/>;
}
 
}