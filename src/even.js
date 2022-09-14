/* eslint-disable no-console, import/extensions */
import readlineSync from 'readline-sync';

const random = Math.floor(Math.random() * 20);

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export default brainEven;
