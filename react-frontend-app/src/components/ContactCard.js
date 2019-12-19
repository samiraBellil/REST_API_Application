import React from "react";
import { connect } from "react-redux";
import {deletecontacts} from  '../actions/action';
import ModalComp from './ContactModify'



const ContactCard = ({ contact , deletecontacts }) => {
  return (
    <div className="contact-card">
      <div className="contact-card-item">
        <h3>name: </h3>
        <h3>{contact.name} </h3>
      </div>
      <div className="contact-card-item">
        <span>phone_number: </span>
        <span>{contact.phone} </span>
      </div>
      <div className="contact-card-item">
        <span>email: </span>
        <span>{contact.email} </span>
      </div>

      <div className="contact-card-buttons">
        <ModalComp el={contact}/>
        {/* <button value="Delete Contact"  onClick={()=>deletecontacts(contact._id)}></button> */}
        <input type="button" value="Delete" onClick={()=>deletecontacts(contact._id)}/>
      </div>
    </div>
  );
};

export default connect(null, {deletecontacts})(ContactCard);