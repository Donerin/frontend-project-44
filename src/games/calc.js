import getRandomNumber from '../randomNumber.js';
import createGame from '../index.js';

const description = 'What is the result of the expression?';
const operatorArray = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Undefined operator: '${operator}'!`);
  }
};

const createRound = () => {
  const valueOne = getRandomNumber(25, 50);
  const valueTwo = getRandomNumber(1, 24);
  const randomOperator = operatorArray[getRandomNumber(0, operatorArray.length - 1)];
  const question = `${valueOne} ${randomOperator} ${valueTwo}`;
  const rightAnswer = String(calculate(valueOne, valueTwo, randomOperator));
  return [question, rightAnswer];
};

const playBrainCalc = () => createGame(description, createRound);

export default playBrainCalc;
