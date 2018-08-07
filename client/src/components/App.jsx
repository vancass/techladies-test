import React, { Component } from 'react';
import './App.css';
import TodoAppList from './TodoAppList.jsx';
import Routes from './Routes.jsx';

class App extends Component {
  // state = {
  //   response: ''
  // };

  // componentDidMount(){
  //   this.callApi()
  //     .then(res => this.setState({response: res.express}))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if(response.status !== 200) throw Error(body.message);
  //   return body;
  // };

  render() {
    return (
      <div className="App">
          <nav className="App-header">
            <a className="App-about" href="/about">About</a>
            <a className="App-todo" href="/todo">Todo-list</a>
          </nav>
        <Routes/>
      </div>
    );
  }
}

export default App;
