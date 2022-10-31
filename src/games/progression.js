import getRandomNumber from '../randomNumber.js';
import createGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (progressionStart, progressionStep, progressionLength) => {
  const massive = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const result = progressionStart + (i * progressionStep);
    massive.push(result);
  }
  return massive;
};

const createRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(2, 10);
  const randomLength = getRandomNumber(5, 10);

  const progression = generateProgression(firstNumber, step, randomLength);
  const randomIndex = getRandomNumber(0, progression.length - 1);

  const rightAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, rightAnswer];
};

const playBrainProgression = () => createGame(description, createRound);

export default playBrainProgression;
