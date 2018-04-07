import React from 'react';
import ReactDOM from 'react-dom';
import './component.css';

export const AppHeader = () => {
  return (
    
        <h1 className="header item">
          Tu wyświetlą się informacje 
          </h1>
     
  );
};
export const Item = ({ id, someText }) => {
  return (
    <li className="item">
      <div className="content">
      <h1 className="id">{id}</h1>
        <h4 className="text">{someText}</h4>
        
      </div>
    </li>
  );
};
export class List extends React.Component {
  textToItem = text => {
    const id = text.id;
    const someText = text.someText;
    return <Item key={id} id={id} someText={someText} />;
  };

  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.texts.map(this.textToItem)}
      </ul>
    );
  }
}


export class App extends React.Component {
  state = {
    texts: []
  };

  componentDidMount() {
    let URL = 'http://193.33.111.170:8080/test'
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({ texts: json })
    )
    .catch((err) => console.log(err))


  }

  render() {
    return (
      <div>
        <AppHeader />
        <main className="ui main text container">
          <List texts={this.state.texts} />
        </main>
      </div>
    );
  }
}
ReactDOM.render(<App />,
  document.getElementById('root')
);