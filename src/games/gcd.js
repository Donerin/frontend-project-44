/* eslint-disable no-console, import/extensions */
import readlineSync from 'readline-sync';
import random from '../randomNumber.js';

const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  const getGcd = (numberOne, numberTwo) => {
    while (numberTwo) {
      const numberSum = numberTwo;
      numberTwo = numberOne % numberTwo;
      numberOne = numberSum;
    }
    return numberOne;
  };

  for (let i = 0; i < 3; i += 1) {
    const valueOne = random(1, 50);
    const valueTwo = random(1, 50);
    console.log(`Question: ${valueOne} ${valueTwo}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = getGcd(valueOne, valueTwo);
    const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`;

    if (Number(userAnswer) === trueAnswer) {
      console.log('Correct!');
    } else {
      return console.log(wrongAnswer);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainGcd;
