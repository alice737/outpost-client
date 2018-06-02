import React, { Component } from 'react'
import './Drag.css';
class DragParcel extends Component {

    state = {
        parcels: [
            { name: 'PACZKA 1', category: "wip", color: "yellow" },
            { name: 'PACZKA 2', category: "wip", color: "pink" },
            { name: 'PACZKA 3', category: "wip", color: "red" },
            { name: 'PACZKA 4', category: "wip", color: "green" },
            { name: 'PACZKA 5', category: "wip", color: "yellow" },
            { name: 'PACZKA 6', category: "wip", color: "pink" },
            { name: 'PACZKA 7', category: "wip", color: "red" },
            { name: 'PACZKA 8 ', category: "wip", color: "green" },
            { name: 'PACZKA 9', category: "wip", color: "yellow" },
            { name: 'PACZKA 10', category: "wip", color: "yellow" },
            { name: 'PACZKA 12', category: "wip", color: "pink" },
            { name: 'PACZKA 13', category: "wip", color: "red" },
            { name: 'PACZKA 14', category: "wip", color: "green" },
            { name: 'PACZKA 15', category: "wip", color: "yellow" },
            { name: 'PACZKA 16', category: "wip", color: "pink" },
            { name: 'PACZKA 17', category: "wip", color: "red" },
            { name: 'PACZKA 18 ', category: "wip", color: "green" },
            { name: 'PACZKA 19', category: "wip", color: "yellow" }
        ]
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
        let tasks = this.state.parcels.filter((task) => {
            if (task.name == id) {
                task.category = cat;
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
            tasks[t.category].push(
                <div key={t.name}
                    onDragStart={(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable" style={{ backgroundColor: t.color }}
                >{t.name}</div>

            );

        });
        return (<div className="container-drag">

            <h1 className="header">Drag and drop parcels and couriers</h1>
          
            <div className="wip"
             onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e)=> {this.onDrop(e,"wip")}}
            
            >
                <span className="task-header">PACZKI</span>
                {tasks.wip}
            </div>
            <div className="middle"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) =>this.onDrop(e, "middle")}
            >
                <span className="task-header">KURIER</span>
                {tasks.middle}
            </div>



            <div className="droppable"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) =>this.onDrop(e, "complete")}
            >
                <span className="task-header">KURIER </span>
                {tasks.complete}
            </div>
        </div>);
    }



}
export default DragParcel;