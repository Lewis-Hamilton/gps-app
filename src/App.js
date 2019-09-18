import React, {Component} from 'react';
import Fire from './config/Fire';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null});
      }
    });
  }

  render() {
    return (
      <div className="App">
    {this.state.user ? (<Home />) : (<Login/>)}
      </div>
    )
  }
}

export default App;
