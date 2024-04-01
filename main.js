#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
console.log("*****Welcome to the todo app*****");
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            message: "What you want to add in your todos? ",
            type: "input"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more? ",
            default: "false"
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
if (condition === false) {
    let removeTask = await inquirer.prompt([
        {
            name: "removeTodo",
            message: "Do you want to remove the last todo?",
            type: "confirm",
            default: "false"
        },
    ]);
    if (removeTask.removeTodo === true) {
        todos.pop();
    }
    console.log(todos);
}
