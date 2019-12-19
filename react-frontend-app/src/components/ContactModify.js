import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import {modifyContact} from "../actions/action";


class ModalComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: this.props.el.name ,
            phone: this.props.el.phone ,
            email: this.props.el.email
        };
    }
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // modalAction = () => {
        
    //         // this.props.modifyContact(this.state)
    //         // this.setState({ show: false });
   
    // }
    

    render() {
        
        
        return (
            <div>
                <Button className="" variant="primary" onClick={this.handleShow}>
                    edit
                </Button>
                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.editMode}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div>
                                <label>name:</label>
                                <input type="text" onChange={this.handleChange} name="name" value={this.state.name} />
                            </div>
                            <div>
                                <label>phone_number:</label>
                                <input type="text" onChange={this.handleChange} name=" phone_number" value={this.state.phone} />
                            </div>
                            <div>
                                <label>email:</label>
                                <input type="text" onChange={this.handleChange} name="email" value={this.state.email} />
                            </div>

                            

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
            </Button>
                        <Button onClick={()=>this.props.modifyContact(this.props.el._id , this.state)} variant="primary">
                            edit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


// const mapDispatchStateToProps = (dispatch) => {
//     return {
       
//         updateMovie: x => dispatch(ModifyContact(x))
//     }
// }

export default connect(null,{modifyContact})(ModalComp);