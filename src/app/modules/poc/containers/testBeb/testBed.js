/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { applicationLoadedSuccessfully } from '../../../../common/redux/actions/commonActions';

const mapStateToProps = (state) => ({
  applicationLoaded: state.ApplicationBaseReducer.loaded,
});

const mapDispatchToProps = (dispatch) => ({
  setApplicationLoaded: () => dispatch(applicationLoadedSuccessfully),
});

const TestBed = (props) => {
  const { applicationLoadedSuccessfully, applicationLoaded } = props;
  // applicationLoadedSuccessfully();
  return (
    <div>
      THIS IS THE TEST BED - Application loaded
      <p>
        {JSON.stringify(props)}
        {applicationLoaded}
      </p>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TestBed);
