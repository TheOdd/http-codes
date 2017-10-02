import React from 'react';
import codes from '../codes.json';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

class CodesList extends React.Component {
  constructor() {
    super();
    // Local state to manage Modal, as well as the currently selected code object
    this.state = {
      showModal: false,
      currentCode: null
    }
  }

  // Function to change state to open modal and set current code to the code that was clicked on
  openModal(code) {
    this.setState({
      showModal: true,
      currentCode: code
    })
  }

  // Function to change state to close modal
  closeModal() {
    this.setState({
      showModal: false
    })
  }

  render() {
    // Reading input from filter box that was passed down through Redux state
    const text = this.props.text;
    return (
      <div className="http-wrapper">
        <ul>
          {codes.map(code => { // Looping through JSON data file of codes
            if (code.number.toString().indexOf(text) != -1) { // Filtering only matching numbers
              return (
                <li key={uuidv1()}>
                  {code.number} - {code.resp} <i className="glyphicon glyphicon-info-sign" onClick={() => this.openModal(code)}></i>
                </li>
              )
            }
        })}
        </ul>
        { /* Modal element that is always present, but is shown or hidden dynamically based on state */ }
        <Modal show={this.state.showModal} onHide={() => this.closeModal()}>
          {this.state.showModal ? (
            // Ternary expression used to prevent an error when accessing number property while there is no modal open.
            // (Would be trying to get number, desc, and resp from null.)
            <div>
              <Modal.Header closeButton>
                <Modal.Title><h1>{this.state.currentCode.number} - {this.state.currentCode.resp}</h1></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p id="current-code">{ReactHtmlParser(this.state.currentCode.desc)}</p>
              </Modal.Body>
            </div>
          ) : null}
        </Modal>
      </div>
    )
  }
}

CodesList.propTypes = {
  text: PropTypes.string
}

export default CodesList;
