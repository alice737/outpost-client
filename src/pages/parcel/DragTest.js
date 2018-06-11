import React, { Component } from 'react'
import './Drag.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import ParcelList from '../admin/ParcelList';
class DragTest extends Component {
    constructor() {
        super();
        this.state = {
            couriers: [
            ],
            parcels: [
              
            ],
           

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

//        // this.fun();
     var tasks=[];
     this.state.couriers.forEach((c) => {
tasks.push(c);
     })
     console.log(tasks)
//      //task each task 
     
//     var tasks = {

//         wip: [],
//         complete: [],
//         middle: []
//     }

//         this.state.parcels.forEach((t) => {
//             if(t.carrier==null)
//          { t.carrier=0/// tu musi by 0 
//                 console.log(t.carrier)
//              }
//             tasks[t.carrier].push( //t carrier np 0 
//                 <div key={t.id}
//                     onDragStart={(e) => this.onDragStart(e, t.id)}
//                     draggable
//                     className="draggable" style={{ backgroundColor: t.color }}
//                 >{t.id}</div> );
            
        // });
        return (<div className="container-drag">

            <h1 className="header">Przyporzadkuj paczki do kurierow</h1>
            {this.state.couriers.map((item, index) => (
            <div key={index} className="wip"
                // onDragOver={(e) => this.onDragOver(e)}
                // onDrop={(e) => { this.onDrop(e, "wip") }}

            >
                <span className="task-header">{item.id}</span>
                {/* {tasks.wip} */}
            </div>
            ))}

            {/* <div className="wip"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => this.onDrop(e, "middle")}
            >
                <span className="task-header">KURIER</span>
                {tasks.middle}
            </div> */}
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
export default DragTest;