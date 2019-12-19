import React , {Component} from "react";
import ContactCard from "./ContactCard";
import { connect } from "react-redux";
import {getcontacts} from '../actions/action';

class ContactList extends Component {

  componentDidMount(){
    this.props.getcontacts()

  }
   render(){
    return (
      <div>
        <h1 className="contact-list-title">Contact List</h1>
        <div>
          {this.props.ContactList.map(el => <ContactCard key={el.id} contact={el} />)}
        </div>
      </div>
    );
   }
  
};

const mapStateToProps = state => {
  return {
    ContactList: state.ContactReducer
  };
};

const SmartContactList = connect(mapStateToProps,{getcontacts})(ContactList);
export default SmartContactList;
