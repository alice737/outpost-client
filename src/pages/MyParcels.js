import React,{Component} from 'react';
import UserNav from './UserNav';
import Footer from './Footer'
class MyParcels extends Component{
    render(){
        return(
            <div>

            <UserNav />
            <div class="card-body text-center">
<form class="form-inline active-cyan-3 active-cyan-4">
    <i class="fa fa-search" aria-hidden="true"></i>
    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
</form>
</div>
<div class="card-body text-center">
<h5> Nie znaleziono przesyłek </h5>
</div>
            <Footer />
        </div>
        );
    }
}
export default MyParcels;