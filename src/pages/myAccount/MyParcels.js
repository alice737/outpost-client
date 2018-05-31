import React, { Component } from 'react';
import DispatcherNav from '../dispatcher/DispatcherNav';
import MyAccountNav from './MyAccountNav'

class MyParcels extends Component {
    constructor(){
        super();
        this.state={
          res:'',
          status:''
        };
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
                <div class="card-body text-center">
                    <form class="form-inline active-cyan-3 active-cyan-4">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                <div class="card-body text-center">
                <Answer res={this.state.res} status={this.state.status} />
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