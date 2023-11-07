const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const steps = [
    {
        prompt: "Welcome to DoughBender's 1st calc program! Enter anything to proceed.",
    },
    {
        prompt: 'Enter the first number: ',
    },
    {
        prompt: 'Enter an operator (+, -, *, /): ',
    },
    {
        prompt: 'Enter the second number: ',
    },
    {
        prompt: 'Do another calculation? (yes/no): ',
    },
];
async function getUserInput(step) {
    return new Promise((resolve) => {
        rl.question(steps[step].prompt, (answer) => {
            resolve(answer);
        });
    });
}
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error("Error: Division by zero is not allowed.");
            }
            return num1 / num2;
        default:
            throw new Error("Error: Invalid operator.");
    }
}
async function startCalculator() {
    let step = 0;
    let num1;
    let operator;
    let num2;
    while (step < steps.length) {
        if (step === 0) {
            const input = await getUserInput(step);
            if (input.toLowerCase() === 'end') {
                console.log('Goodbye!');
                rl.close();
                return;
            }
        }
        if (step === 1) {
            const input = await getUserInput(step);
            if (input.toLowerCase() === 'end') {
                console.log('Goodbye!');
                rl.close();
                return;
            }
            if (input.toLowerCase() === 'restart') {
                step = 0;
                continue;
            }
            if (input.toLowerCase() === 'back') {
                if (step > 0) {
                    step--;
                    continue;
                }
            }
            num1 = parseFloat(input);
            if (isNaN(num1)) {
                console.log('Invalid input. Please enter a valid number.');
                continue;
            }
        }
        if (step === 2) {
            const input = await getUserInput(step);
            if (input.toLowerCase() === 'end') {
                console.log('Goodbye!');
                rl.close();
                return;
            }
            if (input.toLowerCase() === 'restart') {
                step = 0;
                continue;
            }
            if (input.toLowerCase() === 'back') {
                if (step > 0) {
                    step--;
                    continue;
                }
            }
            if (!['+', '-', '*', '/'].includes(input)) {
                console.log('Invalid operator. Please enter a valid operator (+, -, *, /).');
                continue;
            }
            operator = input;
        }
        if (step === 3) {
            const input = await getUserInput(step);
            if (input.toLowerCase() === 'end') {
                console.log('Goodbye!');
                rl.close();
                return;
            }
            if (input.toLowerCase() === 'restart') {
                step = 0;
                continue;
            }
            if (input.toLowerCase() === 'back') {
                if (step > 0) {
                    step--;
                    continue;
                }
            }
            num2 = parseFloat(input);
            if (isNaN(num2)) {
                console.log('Invalid input. Please enter a valid number.');
                continue;
            }
            if (operator === '/' && num2 === 0) {
                console.log('Unable to divide by 0. Please enter a new number.');
                step = 3;
                continue;
            }
        }
        if (step === 4) {
            const result = calculate(num1, num2, operator);
            console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
            const doAnotherCalculation = await getUserInput(step);
            if (doAnotherCalculation.toLowerCase() === 'no') {
                console.log('Goodbye!');
                rl.close();
                return;
            }
            else if (doAnotherCalculation.toLowerCase() === 'restart') {
                step = 0;
                continue;
            }
            else if (doAnotherCalculation.toLowerCase() === 'back') {
                step = 3; // Go back to Step 4
                continue;
            }
            else if (doAnotherCalculation.toLowerCase() !== 'yes') {
                console.log('Invalid input. Please enter "yes" or "no".');
                continue;
            }
            step = 1;
        }
        step++;
    }
    rl.close();
}
startCalculator();
