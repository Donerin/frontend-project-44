/* eslint-disable no-console, import/extensions */
import random from '../randomNumber.js';
import originBrain from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return true;
  let flag = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

const information = () => {
  const question = random(1, 100);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, trueAnswer];
};

const brainPrime = () => originBrain(description, information);

export default brainPrime;
