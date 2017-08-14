import React from 'react';
import codes from '../codes.json';
import uuidv1 from 'uuid/v1';

class CodesList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul style={{marginLeft: '35%'}}>
        {codes.map(code => <li key={uuidv1()}>{code.number} - {code.resp}</li>)}
      </ul>
    )
  }
}

export default CodesList;
