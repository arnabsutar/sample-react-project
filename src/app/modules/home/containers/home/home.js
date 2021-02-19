/* eslint-disable prefer-template */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import appLogger from '../../../../../appLogger';
/**
 * @description
 * @author Arnab Sutar
 * @date 04-Jan-2021
 * @param {*} props
 * @return {*} - Home component
 */
const Home = (props) => {
  const [t] = useTranslation();
  console.log('SAMPLE Message ' + t('static:businessCard.primaryHeading'));
  return (

    <div>
      React is Awesome
    </div>
  );
};

export default Home;
