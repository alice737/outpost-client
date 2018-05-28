import React, { Component } from 'react';
import DispatcherNav from '../dispatcher/DispatcherNav';
import MyAccountNav from './MyAccountNav'
class News extends Component {
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
                <div className="container-fluid" id="container-wi">
                    <div className="row">
                        <DispatcherNav />
                        <MyAccountNav />
                        
                    </div>
                </div>
            </div>

        );
    }
}
export default News;