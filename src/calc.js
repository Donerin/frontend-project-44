/* eslint-disable no-console, import/extensions */
import readlineSync from 'readline-sync';
import greetings from './cli.js';

const brainCalc = () => {
  greetings();
  console.log('What is the result of the expression?');
};

export default brainCalc;
