import React, { Component } from 'react';
import Fire from '../config/Fire';

class Home extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    Fire.auth().signOut();
  }

  render() {
    return (
      <div className="col-md-6">
        <h1>Welcome Grace Point Students!</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;