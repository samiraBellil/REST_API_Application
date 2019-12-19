import React from "react";
import { connect } from "react-redux";
import {addcontact} from '../actions/action';

class AddContact extends React.Component {
  constructor(props) {
    super(props);
  }
  handleState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="add-contact">
        <h1>Add Contact </h1>
        <div className="add-contact-input">
          <label>name: </label>
          <input type="text" name="name" onChange={this.handleState} />

          <label>phone_number: </label>
          <input type="text" name="phone" onChange={this.handleState} />

          <label>email: </label>
          <input type="text" name="email" onChange={this.handleState} />

          <input
            className="contact-add-btn"
            type="button"
            value="Add"
            onClick={() => {this.props.addcontact(this.state)}}
          />
        </div>
        <hr />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    contacts: state.ContactReducer
  };
};

// const mapDispatchToProps = dispatch => {
//   return{
//     onAddContact : data => dispatch(onAddContact(data))
//   }
// };

const SmartAddContact = connect(mapStateToProps, {addcontact})(AddContact);

export default SmartAddContact;