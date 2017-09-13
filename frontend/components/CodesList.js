import React from 'react';
import codes from '../codes.json';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

class CodesList extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      currentCode: null
    }
  }

  openModal(code) {
    this.setState({
      showModal: true,
      currentCode: code
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  render() {
    const text = this.props.text;
    return (
      <div>
        <ul style={{marginLeft: '35%'}}>
          {codes.map(code => {
            if (code.number.toString().indexOf(text) != -1) {
              return (
                <li key={uuidv1()}>
                  {code.number} - {code.resp} <i style={{fontSize: '0.55em'}} className="glyphicon glyphicon-info-sign" onClick={() => this.openModal(code)}></i>
                </li>
              )
            }
        })}
        </ul>
        <Modal show={this.state.showModal} onHide={() => this.closeModal()}>
          {this.state.showModal ? (
            <div>
              <Modal.Header closeButton>
                <Modal.Title>{this.state.currentCode.number} - {this.state.currentCode.resp}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{this.state.currentCode.desc}</p>
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
