import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Tracking extends Component {
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
                <Navbar />
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-4">Paczki doręczamy od ręki!</h1>
                        <p className="lead">Najlepiej prosperująca firma kurierska zapwniamy szeroki zakres usług.</p>
                        <Link className="btn btn-primary btn-sm" to="/" role="button">Poznaj nas bliżej</Link>
                    </div>
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
                <Footer />
            </div>
        );
    }
}
export default Tracking;


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