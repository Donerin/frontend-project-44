/* eslint-disable no-console, import/extensions */
import readlineSync from 'readline-sync';

const originBrain = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  const randomMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const randomMin = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const operandArray = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const valueMax = randomMax(25, 50);
    const valueMin = randomMin(1, 24);
    const randomOperand = operandArray[Math.floor(Math.random() * operandArray.length)];
    console.log(`Question: ${valueMax} ${randomOperand} ${valueMin}`);
    const userAnswer = readlineSync.question('You answer: ');
    let getOperand;

    switch (randomOperand) {
      case '+':
        getOperand = valueMax + valueMin;
        break;
      case '-':
        getOperand = valueMax - valueMin;
        break;
      case '*':
        getOperand = valueMax * valueMin;
        break;
      default:
        return null;
    }
    const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was '${getOperand}'.\nLet's try again, ${userName}!`;

    if (Number(getOperand) === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      return console.log(wrongAnswer);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default originBrain;
