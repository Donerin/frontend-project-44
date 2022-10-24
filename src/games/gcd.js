/* eslint-disable no-param-reassign */
import getRandomNumber from '../randomNumber.js';
import createGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (numberOne, numberTwo) => {
  if (numberOne % numberOne !== 0 || numberTwo % numberOne !== 0) {
    return getGcd(numberTwo, numberOne % numberTwo);
  }
  return numberOne;
};

const createRound = () => {
  const valueOne = getRandomNumber(1, 50);
  const valueTwo = getRandomNumber(1, 50);
  const question = `${valueOne} ${valueTwo}`;
  const rightAnswer = String(getGcd(valueOne, valueTwo));
  return [question, rightAnswer];
};

const playBrainGcd = () => createGame(description, createRound);

export default playBrainGcd;
