import React, { Component } from 'react'



class Test extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            value1: '',
            type: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        // this.setState({value: event.target.value,
        // value1: event.target.value1});

        if (e.target.id === 'name') {
            this.setState({ value: e.target.value });
        } else if (e.target.id === 'surname') {
            this.setState({ value1: e.target.value });

            //console.log(e.target.value);
        } else if (e.target.id === 'kurier') {
            this.setState({ type: e.target.value });
        } else if (e.target.id === 'dyspozytor') {
            this.setState({ type: e.target.value });
        } else if (e.target.id === 'magazynier') {
            this.setState({ type: e.target.value });
        }
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.value,
                body: this.state.type,

                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
              <input type="text" id="name" onChange={this.handleChange} required />
                    <input type="text" id="surname" onChange={this.handleChange} required />
                </label>
                <label><input type="radio" onChange={this.handleChange} checked={this.state.type === "kurier"} id="kurier" value="kurier" /> Kurier </label>
                <label><input type="radio" onChange={this.handleChange} checked={this.state.type === "dyspozytor"} id="dyspozytor" value="dyspozytor" /> Dyspozytor </label>
                <label><input type="radio" onChange={this.handleChange} checked={this.state.type === "magazynier"} id="magazynier" value="magazynier" /> Magazynier </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Test;
