/* eslint-disable no-console, import/extensions */
import random from '../randomNumber.js';
import originBrain from '../index.js';

const description = 'What number is missing in the progression?';
const maxLengthProgression = 10;
const minLengthProgression = 5;

const information = () => {
  const difference = random(1, 5);
  const headValue = random(1, 100);
  const lengthDifference = random(minLengthProgression, maxLengthProgression);
  const hiddenNumber = random(0, lengthDifference);
  let question = '';

  for ( let i = 0; i < lengthDifference; i += 1) {
    const nextValue = headValue + difference * i;
    question = (i !== hiddenNumber) ? `${question} ${nextValue}` : `${question} ..`;
  }
  question = question.trim();
  const trueAnswer = String(headValue + difference * hiddenNumber);
  return [question, trueAnswer];
};

const brainProgression = () => originBrain(description, information);

  export default brainProgression;
