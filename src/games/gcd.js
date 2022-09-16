/* eslint-disable no-console, import/extensions */
import random from '../randomNumber.js';
import originBrain from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (numberOne, numberTwo) => {
  while (numberTwo) {
    const numberSum = numberTwo;
    numberTwo = numberOne % numberTwo;
    numberOne = numberSum;
  }
  return numberOne;
};

const information = () => {
  const valueOne = random(1, 50);
  const valueTwo = random(1, 50);
  const question = `${valueOne} ${valueTwo}`;
  const trueAnswer = String(getGcd(valueOne, valueTwo));
  return [question, trueAnswer];
};

const brainGcd = () => originBrain(description, information);

export default brainGcd;
