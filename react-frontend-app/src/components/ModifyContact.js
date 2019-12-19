// import React from "react";
// import { connect } from "react-redux";
// import {ModifyContact} from "../actions/action";

// class ModifyContacts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isModiFyDisplayed: false
//     };
//   }

//   toggleIsModifyDisplayed = () => {
//     this.setState({
//       isModiFyDisplayed: !this.state.isModiFyDisplayed
//     });
//   };

//   initiliseState = () => {
//     this.setState({
//       name: this.props.el.name,
//       phone: this.props.el.tel,
//       email: this.props.el.email
//     });
//   };

//   handleState = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   render() {
//     return (
//       <div
//         className="conatct"
//         style={{
//           border: "1px solid black",
//           width: "47%",
//           textAlign: "center"
//         }}
//       >
//         {this.state.isModiFyDisplayed || (
//           <div>
//             <h4> id : {this.props.el.id} </h4>
//             <h1> name : {this.props.el.name} </h1>
//             <h3> phone Number : {this.props.el.tel} </h3>
//             <h3> email: {this.props.el.email} </h3>
//             <input
//               type="button"
//               value="Modify"
//               onClick={() => this.toggleIsModifyDisplayed()}
//             />
            
//           </div>
//         )}
//         {this.state.isModiFyDisplayed && (
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               width: "30%",
//               textAlign: "center",
//               margin: "auto",
//               marginBottom: "57px"
//             }}
//           >
//             <label> Name </label>
//             <input name="name" onChange={this.handleState} />
//             <label> phone Number </label>
//             <input name="tel" onChange={this.handleState} />
//             <label> Email </label>
//             <input name="email" onChange={this.handleState} />
//             <input
//               type="button"
//               value="Modify"
//               onClick={() => {
//                 this.props.modify({ ...this.state, id: this.props.el.id });
//                 this.toggleIsModifyDisplayed();
//                 console.log({ ...this.state, id: this.props.el.id });
//               }}
//             />
//           </div>
//         )}
//         {this.state.name === undefined && this.initiliseState()}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     contact: state.ContactReducer
//   };
// };

// const mapDispacthToProps = dispatch => {
//     return{
//         modify : data => dispatch(ModifyContact(data))
//     }
//   };

// export default connect(mapStateToProps, mapDispacthToProps)(ModifyContacts);