/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applicationLoadedSuccessfully } from '../../../../common/redux/actions/commonActions';

const TestBed = (props) => {
  const dispatch = useDispatch();
  const currentStore = useSelector((state) => state);
  // applicationLoadedSuccessfully();
  // dispatch(applicationLoadedSuccessfully());
  return (
    <div>
      THIS IS THE TEST BED - Application loaded
      <p>{JSON.stringify(currentStore)}</p>
    </div>
  );
};

export default TestBed;
