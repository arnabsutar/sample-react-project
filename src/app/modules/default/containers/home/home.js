/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import appLogger from '../../../../../appLogger';
/**
 * @description
 * @author Arnab Sutar
 * @date 04-Jan-2021
 * @param {*} props
 * @return {*} - Home component
 */
const Home = (props) => {
  appLogger.error('SAMPLE Message');
  return (

    <div>
      React is Awesome
    </div>
  );
};

export default Home;
