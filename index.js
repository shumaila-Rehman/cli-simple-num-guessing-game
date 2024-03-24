#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\twelcome to cli-number-guessing-game\n");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Enter Your Guess Number from 1 to 6:",
    }]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulation ! you guess a correct Number.");
}
else {
    console.log("sorry ! you guess a wrong Number.");
}
