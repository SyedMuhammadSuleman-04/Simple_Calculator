#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number:", type: "number", name: "firstNumber" },
  { message: "Enter second number:", type: "number", name: "secondNumber" },
  {
    message: "Select operator from following operation:",
    type: "list",
    name: "operators",
    choices: ["Add", "Subtract", "Multiply", "Divide","Power"],
  },
]);

if(answer.operators === "Add"){
    console.log(answer.firstNumber + answer.secondNumber);
    console.log("Superb!");
    console.log("Keep it up!");
}else if (answer.operators === "Subtract"){
    console.log(answer.firstNumber - answer.secondNumber);
    console.log("Superb!");
    console.log("Keep it up!");
}if(answer.operators === "Multiply"){
    console.log(answer.firstNumber * answer.secondNumber);
    console.log("Superb!");
    console.log("Keep it up!");
}else if (answer.operators === "Divide"){
    console.log(answer.firstNumber / answer.secondNumber);
    console.log("Superb!");
    console.log("Keep it up!");
}else if (answer.operators === "Power"){
    console.log(answer.firstNumber ** answer.secondNumber);
    console.log("Superb!");
    console.log("Keep it up!");
};
   
