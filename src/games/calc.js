/* eslint-disable no-console, import/extensions */
import readlineSync from 'readline-sync';
import random from '../randomNumber.js';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  const operatorArray = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const valueMax = random(25, 50);
    const valueMin = random(1, 24);
    const randomOperator = operatorArray[Math.floor(Math.random() * operatorArray.length)];
    console.log(`Question: ${valueMax} ${randomOperator} ${valueMin}`);
    const userAnswer = readlineSync.question('You answer: ');
    let getOperator;

    switch (randomOperator) {
      case '+':
        getOperator = valueMax + valueMin;
        break;
      case '-':
        getOperator = valueMax - valueMin;
        break;
      case '*':
        getOperator = valueMax * valueMin;
        break;
      default:
        return null;
    }
    const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was '${getOperator}'.\nLet's try again, ${userName}!`;

    if (Number(getOperator) === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      return console.log(wrongAnswer);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainCalc;
