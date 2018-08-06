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
      <Routes/>

      // <div className="App">
      //   <header className="App-header">
      //     <div className="App-about">About</div>
      //     <div className="App-todo">Todo-list</div>
      //   </header>
      //   <TodoAppList/>
      // </div>
    );
  }
}

export default App;
