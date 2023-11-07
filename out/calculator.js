"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function startCalculator() {
    console.log("Welcome to DoughBender's 1st calc program! Enter anything to proceed.");
    rl.question('', (input) => {
        if (input.toLowerCase() === 'end') {
            rl.close();
            return;
        }
        if (input.toLowerCase() !== 'end') {
            askFirstNumber();
        }
    });
}
function askFirstNumber() {
    rl.question('Enter the first number: ', (num1Input) => {
        if (num1Input.toLowerCase() === 'end') {
            rl.close();
            return;
        }
        else if (num1Input.toLowerCase() === 'back' || num1Input.toLowerCase() === 'restart') {
            startCalculator();
        }
        else if (isNaN(parseFloat(num1Input))) {
            console.log('Invalid input. Please enter a valid number.');
            askFirstNumber();
        }
        else {
            const num1 = parseFloat(num1Input);
            askOperator(num1);
        }
    });
}
function askOperator(num1) {
    rl.question('Enter an operator (+, -, *, /): ', (operatorInput) => {
        if (operatorInput.toLowerCase() === 'end') {
            rl.close();
            return;
        }
        else if (operatorInput.toLowerCase() === 'back' || operatorInput.toLowerCase() === 'restart') {
            askFirstNumber();
        }
        else if (!['+', '-', '*', '/'].includes(operatorInput)) {
            console.log('Invalid operation. Please enter a valid operator.');
            askOperator(num1);
        }
        else {
            const operator = operatorInput;
            askSecondNumber(num1, operator);
        }
    });
}
function askSecondNumber(num1, operator) {
    rl.question('Enter the second number: ', (num2Input) => {
        if (num2Input.toLowerCase() === 'end') {
            rl.close();
            return;
        }
        else if (num2Input.toLowerCase() === 'back' || num2Input.toLowerCase() === 'restart') {
            askOperator(num1);
        }
        else if (isNaN(parseFloat(num2Input))) {
            console.log('Invalid input. Please enter a valid number.');
            askSecondNumber(num1, operator);
        }
        else {
            const num2 = parseFloat(num2Input);
            if (operator === '/' && num2 === 0) {
                console.log('Unable to divide by 0. Please enter a new number.');
                askSecondNumber(num1, operator);
            }
            else {
                const result = calculate(num1, num2, operator);
                console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
                askForAnotherCalculation();
            }
        }
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
            return num1 / num2;
        default:
            throw new Error('Invalid operator');
    }
}
function askForAnotherCalculation() {
    rl.question('Do another calculation? (yes/no): ', (doAnotherCalculation) => {
        if (doAnotherCalculation.toLowerCase() === 'yes') {
            askFirstNumber();
        }
        else if (doAnotherCalculation.toLowerCase() === 'no') {
            rl.close();
        }
        else if (doAnotherCalculation.toLowerCase() === 'end') {
            rl.close();
        }
        else if (doAnotherCalculation.toLowerCase() === 'restart') {
            startCalculator();
        }
        else {
            console.log('Invalid input. Please enter "yes," "no," "end," or "restart."');
            askForAnotherCalculation();
        }
    });
}
startCalculator();
