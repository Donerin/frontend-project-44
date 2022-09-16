/* eslint-disable no-console, import/extensions */
import readlineSync from 'readline-sync';

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  const random = (max) => Math.floor(Math.random() * max);

};

export default brainProgression;