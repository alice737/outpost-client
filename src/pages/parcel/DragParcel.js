import React, { Component } from 'react'
import './Drag.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import ParcelList from '../admin/ParcelList';
class DragParcel extends Component {
    constructor(props) {
        super();
        this.state = {
           // couriers: [],
            parcels: [],
            name: props.name,
            // shifts: [],
            id: "",
            idShift: props.idShift
           
        };
        this.fun = this.fun.bind(this);

    }
    fun() {
  
        this.state.parcels.forEach(i => i.carrier = 'wip')
    }
    componentDidMount() {
        axios.get('http://localhost:8080/dispatcher/getNotConnectedParcels')
            .then(response => {
                this.setState({
                    parcels: response.data
                });

               // console.log(response);
            }).catch((err) => console.log(err))
    }


    onDragOver = (ev) => {
        ev.preventDefault();
    }
    onDragStart = (ev, id) => {
        console.log("dragstart", id)
        ev.dataTransfer.setData("id", id);
    }
    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData('id');
        console.log(id)
        let tasks = this.state.parcels.filter((task) => {
            if (task.id == id) {
                task.carrier = cat; 
                
            }
            return task;
        })

        this.setState({
            ...this.state,
            tasks
        })
    }
    render() {
     
    var tasks = {

        wip: [],
        complete: [],
        middle: []
    }

        this.state.parcels.forEach((t) => {
            if(t.carrier==null)
         { t.carrier="wip"
                console.log(t.carrier)
             }
            tasks[t.carrier].push(
                <div key={t.id}
                    onDragStart={(e) => this.onDragStart(e, t.id)}
                    draggable
                    className="draggable" style={{ backgroundColor: t.color }}
                >{t.id}{''} {t.waybill.recipient.address.street} {t.waybill.recipient.address.street_number} { t.waybill.recipient.address.postal_code} </div> );
            
        });
        return (<div className="container-drag">

            <h1 className="header">Przyporzadkuj paczki do zmiany</h1>

            <div className="wip"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => { this.onDrop(e, "wip") }}

            >
                <span className="task-header">PACZKI</span>
                {tasks.wip}
            </div>
            <div className="wip"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => this.onDrop(e, "complete")}
            >
                <span className="task-header">ZMIANA{this.props.name}</span>
                {tasks.complete}
            </div>

            <Answer props={this.state.parcels} id={this.props.idShift} />
        </div>);
    }



}
export default DragParcel;


function Answer(props) {
    const res = props;
    const id=props.id;
    console.log("id w kompoennen Answer"+id)
    console.log(props.props.length)

    //console.log(props.props[0].id)
    const tab = [];
    if (props.props.length > 0) {
        for (let i = 0; i < props.props.length; i++) {
            if (props.props[i].carrier == "complete") {
                tab.push(props.props[i].id)
                console.log("Id " + props.props[i].id)
            }

        }
    }
console.log(tab)
    return <AnswerPositive tablica={tab} id={id}/>;

}

export class AnswerPositive extends React.Component {
    constructor(props) {
        super();
        this.state = {
            idShift: '',
            couriers: [
            ],
            tab: props.tablica,
            id: props.id

        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getProps() {

    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8080/dispatcher/addParcelToShift', {
            method: 'POST',
            body: JSON.stringify({
                idShift: this.props.id,
                idParcels: this.props.tablica


            })
            ,
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(function (response) {
            if (!response.ok) {
                alert('Sprawdź czy dane są poprawne')
                throw Error(response.statusText);
                console.log(response.statusText);

            }
            return response;
        }).then(function (response) {
            console.log(response)
            console.log("ok");
            alert('Paczki przydzielone do zmiany ')


        }).catch(function (error) {

            console.log(error);

        });


    }
    render() {
        return (
            <div className="table-responsive">
   
                <input id="complete" type="submit" value="Zapisz" className="btn btn-primary" onClick={this.handleSubmit} />
            </div>

        );
    }
}