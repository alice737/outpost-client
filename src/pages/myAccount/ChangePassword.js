import React,{Component} from 'react';
import DispatcherNav from '../dispatcher/DispatcherNav';
import MyAccountNav from './MyAccountNav'
class ChangePassword extends Component{
    render(){
        var formStyle = {
            maxWidth: 650
          };
        return(
            <div>

                     <div className="container-fluid" id="container-wi">
                    <div className="row">
                        <DispatcherNav />
                        <MyAccountNav />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h1 id="nav-padd" className="h2">Zmień hasło </h1>

                            </div>
           
            <form className="form-signin" style={formStyle} onSubmit={this.handleSubmitRegister}>
                                
                            
                                <div className="form-group">
                                    <label>Stare hasło</label>
                                    <input type="text" className="form-control" id="name" placeholder="Stare hasło" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Nowe hasło</label>
                                    <input type="text" className="form-control" id="surname" placeholder="Nowe hasło" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Powtorz nowe hasło</label>
                                    <input type="text" className="form-control" id="surname" placeholder="Powtorz hasło" onChange={this.handleChange} required />
                                </div>
                               
                                <input type="submit" className="btn btn-primary" value="Zapisz" />
                            </form>
   
                            </main>
                    </div>
                </div>
            </div>
        );
    }
}
export default ChangePassword;