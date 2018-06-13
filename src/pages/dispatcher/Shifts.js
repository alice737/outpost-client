import React, { Component } from 'react';
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
axios.defaults.headers.post['Accept'] ='application/json';
axios.defaults.headers.post['Content-Type'] ="application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
class Shifts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shifts: [],
            show: false
        };
        this.fun = this.fun.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
handleClick(e){
    // console.log("był click")
    if(this.state.show===false)
   { this.setState({show:true})}
   else
   { this.setState({show:false})}
   
}
    componentDidMount() {
        axios.get('http://localhost:8080/dispatcher/getAllShifts')
            .then(response => {
                this.setState({
                    shifts: response.data
                });
                console.log(response);
            }).catch((err) => console.log(err))

    }
    fun(data) {
        var myDate = new Date(data * 1000);
        return myDate.toLocaleString()
    }
    handleChange(e) {

        if (e.target.id === 'click') {
            this.setState({ id: e.target.value });
            console.log(this.state.id)
        }}
        isAuthenticated() {
            const token = localStorage.getItem('token');
            //  let role=decode(token).role;
            if (token && token.length > 10) {
                let role = decode(token).roles;
                console.log(role)
                if (role === 'ROLE_DISPATCHER') {
                    return role;
                } else {
                    return !token && token.length > 10;
    
                }
    
            } else {
                return token && token.length > 10;
            }
    
        }
        render() {
            const isArleadyAuthenticated = this.isAuthenticated();
            return (
                <div>
                    {(isArleadyAuthenticated === 'ROLE_DISPATCHER') ?
                    (<div className="container-fluid" id="container-wi">
                    <div className="row">
                        <DispatcherNav />
                        <LeftNav />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h1 id="nav-padd" className="h2">Lista zmian </h1>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nazwa</th>
                                            <th>Data</th>
                                            <th>Status</th>
                                            <th>Paczki</th>
                                            <th>Kurierzy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.shifts.map((item, index) => (
                                            <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{this.fun(item.shiftStatus[0].timestamp)}</td> 
                                                <td>{item.shiftStatus[item.shiftStatus.length-1].status}</td>
                                                <td>{item.parcels.length}</td>
                                                <td><Link to={`/courierInShift/${item.id}`}>
                                                <span class="hint--right" aria-label="Więcej!"><i class="fa fa-info fa-2x red-text" aria-hidden="true"></i></span>
                                                </Link></td>            
                                            </tr>
                                        ))}
                                        {/* <div key={index}>Item {item.personalia.name} {item.surname}</div>; */}
                                    </tbody>
                                </table>
                            </div>
<Answer res={this.state.show}/>
                        </main>
                    </div>
                </div>):
                (<Redirect to={{ pathname: '/login' }} />)}
            </div>

        );
    }
}
export default Shifts;

function Answer(props) {
    const res= props.res;

    if (!props.res) {
        return null;
      }
      
    if (res===true) {
        
      return <AnswerPositive packNumber={182}/>;
    }
    else if(res==='err')
    {
    return null;
}
 
}
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
            
          
            let url='http://localhost:8080/guest/checkParcelStatus/'+this.state.packNumber
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
