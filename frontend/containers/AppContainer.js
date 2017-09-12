import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import FilterBox from '../components/FilterBox';
import CodesList from '../components/CodesList';

const AppContainer = ({ text, dispatch }) => {
    return (
        <div>
          <FilterBox dispatch={dispatch} text={text}/>
          <CodesList text={text}/>
        </div>
    );
};

AppContainer.propTypes = {
  text: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
      text: state.text
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: dispatch
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
