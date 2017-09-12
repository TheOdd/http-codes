import React from 'react';
import codes from '../codes.json';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';

const CodesList = ( { text } ) => {
  return (
      <ul style={{marginLeft: '35%'}}>
        {codes.map(code => {
          if (code.number.toString().indexOf(text) != -1) {
            return <li key={uuidv1()}>{code.number} - {code.resp}</li>
          }
      })}
      </ul>
  )
}

CodesList.propTypes = {
  text: PropTypes.string
}

export default CodesList;
