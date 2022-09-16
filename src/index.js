/* eslint-disable no-console, import/extensions, consistent-return */
import readlineSync from 'readline-sync';

const roundsCount = 3;

const originBrain = (description, information) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, trueAnswer] = information();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`;

    if (trueAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      return console.log(wrongAnswer);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default originBrain;
