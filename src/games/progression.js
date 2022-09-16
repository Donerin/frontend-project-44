/* eslint-disable no-console, import/extensions */
import readlineSync from 'readline-sync';
import random from '../randomNumber.js';

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
};

export default brainProgression;
