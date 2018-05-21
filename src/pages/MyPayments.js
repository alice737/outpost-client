import React, { Component } from 'react';
import UserNav from './UserNav';
import Footer from './Footer'
class MyPayments extends Component {
    render() {
        let styl = {
            width: 600,
            margin: 20

        };
        let toLeft = {
            float: 'left'
        };
        let toRight = {
            textAlign: 'right'
        };
        return (
            <div>

                <UserNav />
                <h3 className="mb-5 font-weight-bold text-center">Moje platnosci</h3>
                <div class="card" style={styl}>
                    <ul class="list-group list-group-flush" style={toLeft} >
                        <li class="list-group-item"><div style={toLeft}>Stan konta</div><div style={toRight}>0.00 </div> </li>

                        <li class="list-group-item"><div style={toLeft} >Stan konta</div><div style={toRight}>Uregulowane </div> </li>
                        <li class="list-group-item"><div style={toLeft}>Kody promocyjne</div><div style={toRight}>brak</div> </li>
                    </ul>
                </div>
                <Footer />
            </div>
        );
    }
}
export default MyPayments;