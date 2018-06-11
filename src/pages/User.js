import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import AdminLeftNav from './AdminLeftNav';
import axios from 'axios';
import { Link } from 'react-router-dom';
axios.defaults.headers.post['Accept'] ='application/json';
axios.defaults.headers.post['Content-Type'] ="application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            id: ""
        };
    }

    componentDidMount() {
        let url = 'http://193.33.111.170:8080/admin/' + this.props.match.params.type;
        axios.get(url)
            .then(response => {
                this.setState({
                    user: response.data
                });

                console.log(response);
            }).catch((err) => console.log(err))

    }
    handleSubmit(event) {
        //on delete
        event.preventDefault();
        fetch('http://193.33.111.170:8080/admin/deleteEmployee/', {
            method: 'DELETE',
            // mode: 'no-cors', // no-cors
            body: JSON.stringify({
                id: this.props.match.params.id
            })
            ,
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        })

    }
   



    render() {
        return (


            <div>
                <div className="container-fluid" id="container-wi">
                    <div className="row">
                        <DispatcherNav />
                        <AdminLeftNav />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h1 id="nav-padd" className="h2"></h1>

                            </div>
                            <div class="card testimonial-card">


                                <div class="card-up indigo lighten-1">
                                </div>


                                <div class="avatar mx-auto white"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle" />
                                </div>

                                <div class="card-body">


                                    {this.state.user.filter(item => item.id == this.props.match.params.id).map((item, index) => (
                                        <div key={index}>
                                            <h4 class="card-title">{item.personalia.name} {item.personalia.surname}</h4>

                                            <div>Telefon: {item.personalia.telNumber} </div>
                                            <div>Ulica: {item.personalia.address.street} </div>
                                            <div>Numer ulicy: {item.personalia.address.street_number} </div>
                                            <div>Numer domu: {item.personalia.address.house_number} </div>
                                            <div>Miasto: {item.personalia.address.city} </div>
                                            <div>Kod pocztowy: {item.personalia.address.postal_code} </div>
                                            <div>
                                                <Link to={`/editemployee/${this.props.match.params.type}/${item.id}`}>
                                                <span class="hint--right" aria-label="Edytuj dane pracownika!"><i class="fa fa-edit fa-3x blue-text" aria-hidden="true"></i></span>
                                                
                                                </Link>
                                             <Link to="/">
                                       
                                                <span class="hint--right" aria-label="Usuń tego pracownika z systmu!"><i class="fa fa-remove fa-3x blue-text" aria-hidden="true"></i></span>
   

                                            </Link>
   
                                            </div>
                                        </div>
                                    ))}


                                </div>

                            </div>

                        </main>

                    </div>

                </div>
            </div>


        );

    }
}
export default User;