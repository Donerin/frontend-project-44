import getRandomNumber from '../randomNumber.js';
import createGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) 
  return true;

  let flag = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

const createRound = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playBrainPrime = () => createGame(description, createRound);

export default playBrainPrime;
