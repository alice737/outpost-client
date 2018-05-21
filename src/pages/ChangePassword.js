import React,{Component} from 'react';
import UserNav from './UserNav';
import Footer from './Footer'
class ChangePassword extends Component{
    render(){
        var formStyle = {
            maxWidth: 650
          };
        return(
            <div>

            <UserNav />
            <h1></h1>
            <form className="form-signin" style={formStyle} onSubmit={this.handleSubmitRegister}>
                                <h1>Zmień hasło</h1>
                            
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
            <Footer />
        </div>
        );
    }
}
export default ChangePassword;