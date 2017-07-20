import React from 'react';
import FilterBox from './FilterBox';
import CodesList from './CodesList';

class CodesApp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <FilterBox />
        <CodesList />
      </div>
    )
  }
}

export default CodesApp;
