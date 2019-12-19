import React, { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';


class App extends Component {
    render(){
        return(
        <div >
          <AddContact />
          <ContactList />
      </div>
    )
    }
}
export default App;