/* eslint-disable no-console, import/extensions */
import random from '../randomNumber.js';
import originBrain from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const information = () => {

};

const brainPrime = () => originBrain(description, information);

export default brainPrime;
