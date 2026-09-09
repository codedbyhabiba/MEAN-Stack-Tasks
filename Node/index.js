//lab 1
const fs = require('fs');
const args = process.argv.slice(2);
function getTodos(){
    const data = fs.readFileSync("todos.json", "utf-8");
    return JSON.parse(data);
};
function saveTodos(todos){
    fs.writeFileSync(
        "todos.json",
        JSON.stringify(todos,null,2)
    );
};
if(args[0]==="add"){
    const title=args[1];
    const todos =getTodos();
    const newTodo={
        id:todos.length+1,
        title:title
    };
    todos.push(newTodo);
    saveTodos(todos);
    console.log("Todo added successfully");
};
console.log(process.argv);
if(args[0]==="list"){
    const todos=getTodos();
    console.log(todos);
};


if (args[0] === "edit") {
    const id = Number(args[1]);
    const newTitle = args[2];

    const todos = getTodos();

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        console.log("Todo not found");
        return;
    }

    todo.title = newTitle;

    saveTodos(todos);

    console.log("Todo updated successfully");
};

if (args[0] === "delete") {
    const id = Number(args[1]);

    const todos = getTodos();

    const newTodos = todos.filter(todo => todo.id !== id);

    saveTodos(newTodos);

    console.log("Todo deleted successfully");
};