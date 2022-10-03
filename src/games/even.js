import getRandomNumber from '../randomNumber.js';
import getOriginBrain from '../index.js';

const description = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const isEven = (num) => (num % 2) === 0;

const getInformation = () => {
  const value = getRandomNumber(1, 50);
  const question = value;
  const rightAnswer = isEven(value) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const getBrainEven = () => getOriginBrain(description, getInformation);

export default getBrainEven;
