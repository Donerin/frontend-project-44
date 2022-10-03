import getRandomNumber from '../randomNumber.js';
import getOriginBrain from '../index.js';

const description = 'What number is missing in the progression?';
const maxLengthProgression = 10;
const minLengthProgression = 5;

const getInformation = () => {
  const difference = getRandomNumber(1, 5);
  const headValue = getRandomNumber(1, 100);
  const lengthDifference = getRandomNumber(minLengthProgression, maxLengthProgression);
  const hiddenNumber = getRandomNumber(0, lengthDifference);
  let question = '';

  for (let i = 0; i < lengthDifference; i += 1) {
    const nextValue = headValue + difference * i;
    question = (i !== hiddenNumber) ? `${question} ${nextValue}` : `${question} ..`;
  }
  question = question.trim();
  const rightAnswer = String(headValue + difference * hiddenNumber);
  return [question, rightAnswer];
};

const getBrainProgression = () => getOriginBrain(description, getInformation);

export default getBrainProgression;
