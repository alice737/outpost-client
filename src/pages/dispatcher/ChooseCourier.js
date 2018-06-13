import React, { Component } from 'react'

import axios from 'axios';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');


class Courier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            couriers: [],
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    componentDidMount() {
        axios.get('http://localhost:8080/admin/carriers')
            .then(response => {
                this.setState({
                    couriers: response.data
                });

                console.log(response);
            }).catch((err) => console.log(err))

    }


    render() {
        return (



            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Imie</th>
                            <th>Nazwisko</th>
                            <th>Czy dodac kuriera do wybranej zmiany ? </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.couriers.map((item, index) => (
                            <tr key={index}>
                                <td> {item.personalia.name}</td>
                                <td> {item.personalia.surname}</td>

                                <td>  <button onClick={this.handleClick}>
                                    {this.state.isToggleOn ? 'TAK' : 'NIE'}
                                </button>            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        );

    }
}

export default Courier;