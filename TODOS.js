import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoquestion = await inquirer.prompt([
        {
            name: "FirstQuestion",
            type: "input",
            message: "What would you like to add in your todos?",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Do you want to add more",
            default: "true`"
        },
    ]);
    todos.splice(todoquestion.FirstQuestion);
    console.log(todoquestion.FirstQuestion);
    todos.slice(todoquestion.FirstQuestion);
    console.log(todoquestion.FirstQuestion);
    todos.push(todoquestion.FirstQuestion);
    console.log(todos);
    condition = todoquestion.secondQuestion;
}
;
