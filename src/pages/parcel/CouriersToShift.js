import React, { Component } from 'react'
import './Drag.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import DragParcel from './DragParcel'

class CouriersToShift extends Component {
    constructor(props) {
        super();
        this.state = {
            complete: [],
            couriers: [],
            name: props.name,
            shifts: [],
            id: "",
            shiftByName:{}
            

        };
        this.fun = this.fun.bind(this);
        this.findID = this.findID.bind(this);

    }
    fun() {
        this.state.couriers.forEach(i => i.carrier = 'wip')
    }
    componentDidMount() {
        axios.get('http://localhost:8080/admin/carriers')
            .then(response => {
                this.setState({
                    couriers: response.data
                });

                console.log(response);
            }).catch((err) => console.log(err))
            
            axios.get('http://localhost:8080/dispatcher/getAllShifts')
            .then(response => {
                this.setState({
                    shifts: response.data
                });

                console.log(response);
            }).catch((err) => console.log(err))
let url='http://localhost:8080/dispatcher/getShiftId/moja123';
            axios.get(url)
            .then(response => {
                this.setState({
                    shiftByName:response.data
                });

                console.log(response);
            }).catch((err) => console.log(err))
    }

    findID(){
        for (let i = 0; i < this.state.shifts.length; i++) {

            console.log("name  "+this.state.name)
           if (this.state.shifts[i].name == this.state.name) {
            this.setState({id: this.state.shifts[i].id})
        console.log("ID zmiany"+this.state.id)
           }
               
            }
    }


    onDragOver = (ev) => {
        ev.preventDefault();
    }
    onDragStart = (ev, id) => {
        //console.log("dragstart", id)
        ev.dataTransfer.setData("id", id);
    }
    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData('id');
        //console.log(id)
        let tasks = this.state.couriers.filter((task) => {
            if (task.id == id) {
                task.carrier = cat;

                //console.log(cat);
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
        var tasks = {

            wip: [],
            complete: []

        }
        
        this.state.couriers.forEach((t) => {
            if (t.carrier == null) {
            t.carrier = "wip"
                //console.log(t.carrier)
            }
            tasks[t.carrier].push(
                <div key={t.id}
                    onDragStart={(e) => this.onDragStart(e, t.id)}
                    draggable
                    className="draggable" style={{ backgroundColor: t.color }}
                >{t.id}  {t.personalia.surname}</div>);

        });
        return (<div className="container-drag">

            <h1 className="header">Przeciągnij i upuśc wybranego kuriera do zmiany !! </h1>

            <div className="wip"
                onDragOver={(e) =>{this.onDragOver(e)
                    this.findID() }}
                onDrop={(e) => { this.onDrop(e, "wip") 
                
            }}

            >
                <span className="task-header">Kurierzy</span>
                {tasks.wip}
            </div>

            <div className="droppable"
                onDragOver={(e) => this.onDragOver(e)}
                onDrop={(e) => this.onDrop(e, "complete")}
            >
                <span className="task-header">{this.state.name}</span>
                {tasks.complete}
            </div>

            <Answer props={this.state.couriers} id={this.state.id} />
        </div>);
    }



}
export default CouriersToShift;

function Answer(props) {
    const res = props;
    const id=props.id;
   console.log("id w kompoennen Answer id zmiany" + id)
    //console.log(props.props.length)

    // console.log(props.props[0].id)
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
            id: props.id,
            res: ''

        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getProps() {

    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ res: '1'});
        fetch('http://localhost:8080/dispatcher/connectCarrierWithShifts', {
            method: 'POST',
            body: JSON.stringify({
                idShift: this.props.id,
                idCarriers: this.props.tablica


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
            alert('Kurierzy przydzieleni do zmiany ')


        }).catch(function (error) {

            console.log(error);

        });


    }
    render() {
        return (
            <div className="table-responsive">
           
                <input id="complete" type="submit" value="Zapisz" className="btn btn-primary" onClick={this.handleSubmit} />
                <AnswerRenderParcel res={this.state.res} name={this.state.shiftname} idShift={this.props.id} />
            </div>

        );
    }
}
function AnswerRenderParcel(props) {
    const res= props.res;
    const name=props.name;
    const idShift=props.idShift;


    if (!props.res) {
        return null;
      }
      
    if (res==='1') {
      return <DragParcel name={name} idShift={idShift} />;
    }
    else if(res==='err')
    {
    return null;
}
 
}