import React from 'react';
import codes from '../codes.json';

class CodesApp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ul>
          {codes.map(code => {
            return <li>{code.number} - {code.resp}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default CodesApp;
