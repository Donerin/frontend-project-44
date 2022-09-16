/* eslint-disable no-console, import/extensions */
import random from '../randomNumber.js';
import originBrain from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2) === 0;

const information = () => {
  const value = random(1, 50);
  const question = value;
  const trueAnswer = isEven(value) ? 'yes' : 'no';
  return [question, trueAnswer];
};

const brainEven = () => originBrain(description, information);

export default brainEven;
