import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer.js';

// Renders the container with the store prop passed to it for Redux integration

export default function Root ({ store }) {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
