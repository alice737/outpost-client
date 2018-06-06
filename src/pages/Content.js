import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class Content extends Component{
    render(){
        return(
<div>

 

 <div className="jumbotron">
   <div className="container">
     <h1 className="display-4">Paczki doręczamy od ręki!</h1>
     <p className="lead">Najlepiej prosperująca firma kurierska zapwniamy szeroki zakres usług.</p>
     <a className="btn btn-primary btn-sm" href="#onas" role="button">Poznaj nas bliżej</a>
   </div>
 </div>
 <div className="container">
   
   <section>
     <div className="row">

       <div className="col-lg-6">
         <h2>Śledź paczkę </h2>
         <p>Prosty system śledzenia. Śledzenie przesyłek w Managerze Paczek (nadawca) oraz na stronie internetowej (odbiorca).
           Z łatwością prześledzisz losy swojej przesyłki na naszej stronie.</p>
         <p>
           <Link className="btn btn-indigo" to="/track" role="button">Więcej &raquo;</Link>
         </p>
       </div>

    
       <div className="col-lg-6">
         <h2>Nadaj przesyłkę </h2>
         <p>Łatwy sposob nadania przesyłki. Zarejstruj się podaj swoje dane, przejdź do swojego konta nadawaj tyle paczek ile tylko chcesz.</p>
         <p>
           <Link to="/login" className="btn btn-indigo"  role="button">Więcej &raquo;</Link>
         </p>
       </div>
     
     </div>
   
   </section>
   <hr className="my-5"/>
 
   <section>
     <h2 className="mb-5 font-weight-bold text-center">
       <a name="onas">O nas</a>
     </h2>
     <div className="row">
       <div className="col-md-7 mb-4">       
         <div className="view overlay z-depth-1-half">
           <img src="http://www.businessbib.net/wp-content/uploads/2016/10/3-4.jpg" className="img-fluid" alt=""/>
           <div className="mask rgba-white-light"></div>
         </div>
       </div>
       <div className="col-md-5 mb-4">
         <h2>OutPost</h2>
         <hr/>
         <p>OutPost pomoże Ci zaoszczędzić czas i pieniądze w innowacyjny sposób. Poznaj nasze usługi wysyłkowe i odkryj, jak
           możesz ograniczyć błędy i obniżyć ogólne koszty.</p>
         <Link to="/registration" className="btn btn-indigo">Wyślij teraz!</Link>
       </div>
     </div>
   </section>
   
   <hr className="my-5"/>

   <section>
   <h2 className="mb-5 font-weight-bold text-center">
   <a name="oferta">Oferta</a>
     </h2>
     <div className="row">
       <div className="col-md-7 mb-4">       
         <div className="view overlay z-depth-1-half">
           <img src="https://static.wowcher.co.uk/images/deal/294953/84431-iphone-promo.jpg" className="img-fluid" alt=""/>
           <div className="mask rgba-white-light"></div>
         </div>
       </div>
       <div className="col-md-5 mb-4">
         <h2>Kurier</h2>
         <hr/>
         <p>Najszybsza dostawa bezpośrednio do drzwi odbiorcy. Tylko w OutPost paczki kurierskie możesz nadać u kuriera,
               w punkcie OutPost .</p>
         <Link to="/registration" className="btn btn-indigo">Wyślij teraz!</Link>
       </div>
     </div>
   </section>
   
   <hr className="my-5"/>

 
   <section id="contact">

 
     <h2 className="mb-5 font-weight-bold text-center">
       <a name="kontakt">Kontakt</a>
     </h2>

 
     <div className="row">

   
       <div className="col-lg-5 col-md-12">

      
         <form className="p-5">

           <div className="md-form form-sm">
             <i className="fa fa-user prefix grey-text"></i>
             <input type="text" id="form3" className="form-control form-control-sm"/>
             <label>Imię</label>
           </div>

           <div className="md-form form-sm">
             <i className="fa fa-envelope prefix grey-text"></i>
             <input type="text" id="form2" className="form-control form-control-sm"/>
             <label >Email</label>
           </div>

           <div className="md-form form-sm">
             <i className="fa fa-tag prefix grey-text"></i>
             <input type="text" id="form32" className="form-control form-control-sm"/>
             <label >Temat</label>
           </div>

           <div className="md-form form-sm">
             <i className="fa fa-pencil prefix grey-text"></i>
             <textarea type="text" id="form8" className="md-textarea form-control form-control-sm" rows="4"></textarea>
             <label >Treśc</label>
           </div>

           <div className="text-center mt-4">
             <button className="btn btn-primary">Wyślij
               <i className="fa fa-paper-plane-o ml-1"></i>
             </button>
           </div>
         </form>
       

       </div>
    
      
       <div className="col-lg-7 col-md-12">

         
         <div className="row text-center">

         
           <div className="col-lg-4 col-md-12 mb-3">

             <p>
               <i className="fa fa-map fa-1x mr-2 grey-text"></i>Krakow</p>

           </div>
          

         
           <div className="col-lg-4 col-md-6 mb-3">

             <p>
               <i className="fa fa-building fa-1x mr-2 grey-text"></i>Pon - Sob, 8:00-22:00</p>

           </div>
          

           
           <div className="col-lg-4 col-md-6 mb-3">

             <p>
               <i className="fa fa-phone fa-1x mr-2 grey-text"></i>787 878 787</p>

           </div>
          

         </div>
      

         
         <div id="map-container" className="z-depth-1-half map-container mb-5" style={{width:500}} >
         <img src="https://pic.conadrogach.pl/zdjecia/google-map/malopolskie-krakow.500.png" className="img-fluid" alt=""/>
         
         
         </div>

       </div>
    

     </div>
  

   </section>

 
 </div>
 

    </div>
        );
    }
}

export default Content;