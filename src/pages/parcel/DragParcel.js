import React, { Component } from 'react'
import './Drag.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import ParcelList from '../admin/ParcelList';
class DragParcel extends Component {
    constructor() {
        super();
        this.state = {
            couriers: [
            ],
            parcels: [
                // { name: 'PACZKA 1', category: "wip", color: "yellow" },
                // { name: 'PACZKA 2', category: "wip", color: "pink" },
                // { name: 'PACZKA 3', category: "wip", color: "red" },
                // { name: 'PACZKA 4', category: "wip", color: "green" },
                // { name: 'PACZKA 5', category: "wip", color: "yellow" },
                // { name: 'PACZKA 6', category: "wip", color: "pink" },
                // { name: 'PACZKA 7', category: "wip", color: "red" },
                // { name: 'PACZKA 8 ', category: "wip", color: "green" },
                // { name: 'PACZKA 9', category: "wip", color: "yellow" },
                // { name: 'PACZKA 10', category: "wip", color: "yellow" },
                // { name: 'PACZKA 12', category: "wip", color: "pink" },
                // { name: 'PACZKA 13', category: "wip", color: "red" },
                // { name: 'PACZKA 14', category: "wip", color: "green" },
                // { name: 'PACZKA 15', category: "wip", color: "yellow" },
                // { name: 'PACZKA 16', category: "wip", color: "pink" },
                // { name: 'PACZKA 17', category: "wip", color: "red" },
                // { name: 'PACZKA 18 ', category: "wip", color: "green" },
                // { name: 'PACZKA 19', category: "wip", color: "yellow" }
            ],
            // parcels:[
            //      { id: 'PACZKA 1', carrier: "", color: "yellow" },
            //      { id: 'PACZKA 2', carrier: "", color: "pink" },
            //      { id: 'PACZKA 3', carrier: "", color: "red" },
            // ]

        };
        this.fun = this.fun.bind(this);
    }
    fun() {
        // var obj = Object.assign(this.state.parcelList, this.state.parcels);
        // console.log(obj); // { a: 1, b: 2, c: 3 }
        this.state.parcels.forEach(i => i.carrier = 'wip')
    }
    componentDidMount() {
        axios.get('http://193.33.111.170:8080/admin/getParcels')
            .then(response => {
                this.setState({
                    parcels: response.data
                });

               // console.log(response);
            }).catch((err) => console.log(err))

            axios.get('http://193.33.111.170:8080/admin/carriers')
            .then(response => {
                this.setState({
                    couriers: response.data
                });

                console.log(response);
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
                task.carrier = cat;  //w task carrrier zapisuje kategorie do ktorej nalezy bo paczki mają takie pole 
                
            }
            return task;
        })

        this.setState({
            ...this.state,
            tasks
        })
    }
    render() {

       // this.fun();
     var tasks=[this.state.couriers.length];
     //task each task 
     
    var tasks = {

        wip: [],
        complete: [],
        middle: []
    }
var testtask=this.state.couriers;
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
                >{t.id}</div> );
            
        });
        return (<div className="container-drag">

            <h1 className="header">Przyporzadkuj paczki do kurierow</h1>

            <div className="wip"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => { this.onDrop(e, "wip") }}

            >
                <span className="task-header">PACZKI</span>
                {tasks.wip}
            </div>
            <div className="wip"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => this.onDrop(e, "middle")}
            >
                <span className="task-header">KURIER</span>
                {tasks.middle}
            </div>
            {/* <div className="wip"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => this.onDrop(e, "complete")}
            >
                <span className="task-header">KURIER </span>
                {tasks.complete}
            </div> */}
            <Link to="/dispatcher"> <input type="submit" className="btn btn-primary" value="Zapisz zmiany" /></Link>
        </div>);
    }



}
export default DragParcel;