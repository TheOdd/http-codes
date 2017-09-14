import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import FilterBox from '../components/FilterBox';
import CodesList from '../components/CodesList';
import Footer from '../components/Footer';
import CenterList from './CenterList';
import CenterInput from './CenterInput';
import CenterFooter from './CenterFooter';

const AppContainer = ({ text, dispatch }) => {
    return (
      <div>
        <CenterInput>
          <FilterBox dispatch={dispatch} text={text}/>
        </CenterInput>
        <CenterList>
          <CodesList text={text}/>
        </CenterList>
        <CenterFooter>
          <Footer />
        </CenterFooter>
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
