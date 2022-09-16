/* eslint-disable no-console, import/extensions */
import random from '../randomNumber.js';
import originBrain from '../index.js';

const description = 'What is the result of the expression?';

const getAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const information = () => {
  const valueMax = random(25, 50);
  const valueMin = random(1, 24);
  const operatorArray = ['+', '-', '*'];
  const randomOperator = operatorArray[Math.floor(Math.random() * operatorArray.length)];
  const question = `${valueMax} ${randomOperator} ${valueMin}`;
  const trueAnswer = Number(getAnswer(valueMax, valueMin, randomOperator));
  return [question, trueAnswer];
};

const brainCalc = () => originBrain(description, information);

export default brainCalc;
