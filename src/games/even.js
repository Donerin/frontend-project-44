import getRandomNumber from '../randomNumber.js';
import createGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2) === 0;

const createRound = () => {
  const question = getRandomNumber(1, 50);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playBrainEven = () => createGame(description, createRound);

export default playBrainEven;
