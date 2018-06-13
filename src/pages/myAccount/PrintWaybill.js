import React, { Component, PropTypes } from 'react';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'
import QRCode from 'qrcode.react'
import axios from 'axios';
import decode from 'jwt-decode';

class PrintWaybill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parcels: [],
      user: []


    };
  }


  componentDidMount() {
    axios.get('http://localhost:8080/admin/getParcels')
      .then(response => {
        this.setState({
          parcels: response.data
        });

        console.log(response);
      }).catch((err) => console.log(err))

    const token = localStorage.getItem('token');
    let id = decode(token).user_id;
    let url = 'http://localhost:8080/user/' + id + '/details';
    axios.get(url)
      .then(response => {
        this.setState({
          user: response.data
        });

        console.log(response);
      }).catch((err) => console.log(err))

  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("waybill.pdf");
      })
      ;
  }


  render() {
    let styl = {
      fontColor: 'black',
      width: '210mm',
      minHeight: '297mm',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: 'white'

    };
    let toLeft = {
      float: 'left'
    };
    let toRight = {
      textAlign: 'right'
    };
    let pad = {
      paddingLeft: '1000px',
      paddingTop: '30px'
    }
    return (<div>
      <div className="container" style={pad}>
        <span>Drukuj potwierdzenie<i className="fa fa-file-pdf-o fa-3x red-text" aria-hidden="true" onClick={this.printDocument}></i> </span>
      </div>

      <div id="divToPrint" className="mt4" style={styl}>

        <main role="main" className="col-md-11 ml-auto mr-auto  col-lg-10 pt-2  px-auto">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-3 border-bottom">
            <h1 id="nav-padd" className="h2">List przewozowy </h1>
            <QRCode value={this.props.match.params.id} />
          </div>
          <ul class="list-group list-group-flush" >
            <li class="list-group-item"> NADAWCA </li>
            <li class="list-group-item"><div style={toLeft} >Imię</div><div style={toRight}>{this.state.user.name} </div> </li>
            <li class="list-group-item"><div style={toLeft} >Nazwisko</div><div style={toRight}>{this.state.user.surname}</div> </li>
            <li class="list-group-item"> ODBIORCA</li>

            {this.state.parcels.filter(item => item.id == this.props.match.params.id).map((item, index) => (
              <ul class="list-group list-group-flush" style={toLeft} >
             
                <li class="list-group-item"><div style={toLeft}>Imię odbiorcy</div><div style={toRight}>{item.waybill.recipient.name} </div> </li>
                <li class="list-group-item"><div style={toLeft}>Nazwisko odbiorcy </div><div style={toRight}>{item.waybill.recipient.surname} </div> </li>
                <li class="list-group-item"><div style={toLeft}>Email</div><div style={toRight}>{item.waybill.recipient.email} </div> </li>
                <li class="list-group-item"><div style={toLeft}>Telefon</div><div style={toRight}>{item.waybill.recipient.telNumber} </div> </li>
                <li class="list-group-item"><div style={toLeft}>Ulica</div><div style={toRight}>{item.waybill.recipient.address.house_number} </div> </li>
                <li class="list-group-item"><div style={toLeft}>Numer ulicy</div><div style={toRight}>{item.waybill.recipient.address.street_number} </div> </li>
                <li class="list-group-item"><div style={toLeft}>Miasto</div><div style={toRight}>{item.waybill.recipient.address.city} </div> </li>
                <li class="list-group-item"><div style={toLeft}>Kod pocztowy</div><div style={toRight}>{item.waybill.recipient.address.postal_code} </div> </li>
                <li class="list-group-item"><div style={toLeft}>Waga</div><div style={toRight}>{item.weight} </div> </li>
                <li class="list-group-item"><div style={toLeft}>Gabaryt</div><div style={toRight}>{item.gauge} </div> </li>
              </ul>
            ))}

          </ul>
        </main>
      </div>
      <div>
        <h4 className="mb-5  text-center">
          <p>Przed wydrukiem sprawdź wszystkie dane </p>
        </h4>
      </div>
    </div>);
  }
}

export default PrintWaybill;