import getRandomNumber from '../randomNumber.js';
import getOriginBrain from '../index.js';

const description = 'What is the result of the expression?';
const operatorArray = ['+', '-', '*'];

const getAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'undefined operator';
  }
};

const getInformation = () => {
  const valueOne = getRandomNumber(25, 50);
  const valueTwo = getRandomNumber(1, 24);
  const randomOperator = operatorArray[getRandomNumber(0, operatorArray.length - 1)];
  const question = `${valueOne} ${randomOperator} ${valueTwo}`;
  const rightAnswer = String(getAnswer(valueOne, valueTwo, randomOperator));
  return [question, rightAnswer];
};

const getBrainCalc = () => getOriginBrain(description, getInformation);

export default getBrainCalc;
