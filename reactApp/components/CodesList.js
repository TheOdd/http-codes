import React from 'react';
import codes from '../codes.json';

class CodesList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul style={{marginLeft: '35%'}}>
        {codes.map(code => <li>{code.number} - {code.resp}</li>)}
      </ul>
    )
  }
}

export default CodesList;
