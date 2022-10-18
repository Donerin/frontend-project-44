/* eslint-disable no-param-reassign */
import getRandomNumber from '../randomNumber.js';
import getOriginBrain from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (numberOne, numberTwo) => {
  while (numberTwo) {
    const numberSum = numberTwo;
    numberTwo = numberOne % numberTwo;
    numberOne = numberSum;
  }
  return numberOne;
};

const getInformation = () => {
  const valueOne = getRandomNumber(1, 50);
  const valueTwo = getRandomNumber(1, 50);
  const question = `${valueOne} ${valueTwo}`;
  const rightAnswer = String(getGcd(valueOne, valueTwo));
  return [question, rightAnswer];
};

const playBrainGcd = () => getOriginBrain(description, getInformation);

export default playBrainGcd;
