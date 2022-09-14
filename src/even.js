/* eslint-disable no-console, import/extensions */
import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const random = (max) => Math.floor(Math.random() * max);

  for (let i = 0; i < 3; i += 1) {
    const value = random(50);
    console.log(`Question ${value}`);
    const userAnswer = readlineSync.question('Your answer ');
    let trueAnswer;

    switch (userAnswer) {
      case 'yes':
        trueAnswer = 'no';
        break;
      case 'no':
        trueAnswer = 'yes';
        break;
      default:
        trueAnswer = (value % 2 === 0) ? 'yes' : 'no';
    }
    const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${userName}!`;

    if ((value % 2 === 0 && userAnswer === 'yes') || (value % 2 !== 0 && userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      return console.log(wrongAnswer);
    }
  }
  console.log(`Congralutations, ${userName}!`);
};

export default brainEven;
