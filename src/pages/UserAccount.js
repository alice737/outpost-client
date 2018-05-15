import React, { Component } from 'react'
import Footer from './Footer'
import UserNav from './UserNav'

class UserAccount extends Component {
    render() {
        return (
            <div>

                <UserNav />
                <Footer />
            </div>
        );
    }
}
export default UserAccount;