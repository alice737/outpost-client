import React, {Component, PropTypes} from 'react';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'


 class PrintWaybill extends Component {
  constructor(props) {
    super(props);
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
    let pad={
paddingLeft:'1000px',
paddingTop:'30px'
    }
    return (<div>
      <div className="container" style={pad}>
      <span>Drukuj potwierdzenie<i className="fa fa-file-pdf-o fa-3x red-text" aria-hidden="true" onClick={this.printDocument}></i> </span>
      </div>

      <div id="divToPrint" className="mt4" style={styl}>

       <main role="main" className="col-md-11 ml-auto mr-auto  col-lg-10 pt-2  px-auto">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-3 border-bottom">
                                <h1 id="nav-padd" className="h2">List przewozowy </h1>
                                <img src="http://www.free-qr-code.net/img/qart1.png"  alt="W3Schools.com"/>
                            </div>
                            <ul class="list-group list-group-flush" >
                                    <li class="list-group-item"> NADAWCA </li>
                                    <li class="list-group-item"><div style={toLeft} >Imię</div><div style={toRight}>- </div> </li>
                                    <li class="list-group-item"><div style={toLeft} >Nazwisko</div><div style={toRight}>-</div> </li>
                                    <li class="list-group-item"> ODBIORCA</li>
                                    <li class="list-group-item"><div style={toLeft} >Imię</div><div style={toRight}>- </div> </li>
                                    <li class="list-group-item"><div style={toLeft} >Nazwisko</div><div style={toRight}>- </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Telefon</div><div style={toRight}>-</div> </li>
                                    <li class="list-group-item"><div style={toLeft} >Ulica</div><div style={toRight}>- </div> </li>

                                    <li class="list-group-item"><div style={toLeft}>Kod pocztowy</div><div style={toRight}>-</div> </li>
                                    <li class="list-group-item"><div style={toLeft} >Miasto</div><div style={toRight}>- </div> </li>

                                    <li class="list-group-item"><div style={toLeft}>Kody referencyjny</div><div style={toRight}>-</div> </li>
                                   
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