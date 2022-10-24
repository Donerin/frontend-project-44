import getRandomNumber from '../randomNumber.js';
import createGame from '../index.js';

const description = 'What number is missing in the progression?';
const maxLengthProgression = 10;
const minLengthProgression = 5;
const generateProgression = (length, value, difference, hiddenNumber) => {
  let question = '';

  for (let i = 0; i < length; i += 1) {
    const nextValue = value + difference * i;
    question = (i !== hiddenNumber) ? `${question} ${nextValue}` : `${question} ..`;
  }
  question = question.trim();
  const rightAnswer = String(value + difference * hiddenNumber);
  return [question, rightAnswer];
};

const createRound = () => {
  const difference = getRandomNumber(1, 5);
  const headValue = getRandomNumber(1, 100);
  const lengthDifference = getRandomNumber(minLengthProgression, maxLengthProgression);
  const hiddenNumber = getRandomNumber(0, lengthDifference);
  return generateProgression(lengthDifference, headValue, difference, hiddenNumber);
};

const playBrainProgression = () => createGame(description, createRound);

export default playBrainProgression;
