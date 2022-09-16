/* eslint-disable no-console, import/extensions */
import readlineSync from 'readline-sync';

const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  const random = (max) => Math.floor(Math.random() * max);
  console.log(`Congratulations, ${userName}!`);
};

export default brainGcd;
