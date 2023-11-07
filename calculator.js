var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function getUserInput(question) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    rl.question(question, function (answer) {
                        resolve(answer);
                    });
                })];
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
function startCalculator() {
    return __awaiter(this, void 0, void 0, function () {
        var num1Input, num1, operatorInput, num2Input, num2, result, doAnotherCalculation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Welcome to DoughBender's 1st calc program! Enter anything to proceed.");
                    return [4 /*yield*/, getUserInput('> ')];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!true) return [3 /*break*/, 9];
                    return [4 /*yield*/, getUserInput('Enter the first number: ')];
                case 3:
                    num1Input = _a.sent();
                    if (num1Input.toLowerCase() === 'end') {
                        process.exit(0);
                    }
                    if (num1Input.toLowerCase() === 'restart') {
                        return [3 /*break*/, 2];
                    }
                    if (!(num1Input.toLowerCase() === 'back')) return [3 /*break*/, 5];
                    console.log("Returning to the beginning. Please enter anything to proceed.");
                    return [4 /*yield*/, getUserInput('> ')];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 2];
                case 5:
                    num1 = parseFloat(num1Input);
                    if (isNaN(num1)) {
                        console.log("Invalid input. Please enter a valid number.");
                        return [3 /*break*/, 2];
                    }
                    return [4 /*yield*/, getUserInput('Enter an operator (+, -, *, /): ')];
                case 6:
                    operatorInput = _a.sent();
                    if (operatorInput.toLowerCase() === 'end') {
                        process.exit(0);
                    }
                    if (operatorInput.toLowerCase() === 'restart') {
                        return [3 /*break*/, 2];
                    }
                    if (operatorInput.toLowerCase() === 'back') {
                        console.log("Returning to the previous step.");
                        return [3 /*break*/, 2];
                    }
                    if (!['+', '-', '*', '/'].includes(operatorInput)) {
                        console.log("Invalid operator. Please enter a valid operator (+, -, *, /).");
                        return [3 /*break*/, 2];
                    }
                    return [4 /*yield*/, getUserInput('Enter the second number: ')];
                case 7:
                    num2Input = _a.sent();
                    if (num2Input.toLowerCase() === 'end') {
                        process.exit(0);
                    }
                    if (num2Input.toLowerCase() === 'restart') {
                        return [3 /*break*/, 2];
                    }
                    if (num2Input.toLowerCase() === 'back') {
                        console.log("Returning to the previous step.");
                        return [3 /*break*/, 2];
                    }
                    num2 = parseFloat(num2Input);
                    if (isNaN(num2)) {
                        console.log("Invalid input. Please enter a valid number.");
                        return [3 /*break*/, 2];
                    }
                    if (operatorInput === '/' && num2 === 0) {
                        console.log("Unable to divide by 0. Please enter a new number.");
                        return [3 /*break*/, 2];
                    }
                    result = calculate(num1, num2, operatorInput);
                    console.log("Result: ".concat(num1, " ").concat(operatorInput, " ").concat(num2, " = ").concat(result));
                    return [4 /*yield*/, getUserInput("Do another calculation? (yes/no): ")];
                case 8:
                    doAnotherCalculation = _a.sent();
                    if (doAnotherCalculation.toLowerCase() !== 'yes') {
                        console.log("Goodbye!");
                        return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 2];
                case 9:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
startCalculator();
