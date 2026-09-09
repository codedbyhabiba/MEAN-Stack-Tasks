//lab 2
const express = require("express");
const fs = require("fs");
// const { title } = require("process");
const app = express();
app.use(express.json());

function getTodos(){
    const data = fs.readFileSync("todos.json","utf-8");
    return JSON.parse(data);
};
function saveTodos(todos) {
    fs.writeFileSync(
        "todos.json",
        JSON.stringify(todos, null, 2)
    );
};

// POST - Create Todo

app.post("/todos",(req,res)=>{
    const todos=getTodos();
    const newId=
    todos.length>0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const newTodo={
        id:newId,
        title:req.body.title,
        status:"to-do"
    };
    todos.push(newTodo);
    saveTodos(todos);
     res.status(201).json(newTodo);
});

// GET - Get Todos
app.get("/todos",(req,res)=>{
    const todos=getTodos();
    const limit =Number(req.query.limit)||10;
     const skip = Number(req.query.skip) || 0;
    const result = todos.slice(skip, skip + limit);
      res.json(result);
});

console.log("GET /todos route loaded");

// GET - Get One Todo
app.get("/todos/:id", (req, res) => {

    const id = Number(req.params.id);

    const todos = getTodos();

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    res.json(todo);
});
// PATCH - Edit Todo
app.patch("/todos/:id", (req, res) => {

    const id = Number(req.params.id);

    const todos = getTodos();

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    todo.title = req.body.title;

    saveTodos(todos);

    res.json(todo);
});

// DELETE - Delete Todo
app.delete("/todos/:id", (req, res) => {

    const id = Number(req.params.id);

    const todos = getTodos();

    const todoExists = todos.some(todo => todo.id === id);

    if (!todoExists) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    const newTodos = todos.filter(todo => todo.id !== id);

    saveTodos(newTodos);

    res.json({
        message: "Todo deleted successfully"
    });
});

app.listen(3000,()=>{
     console.log(`Server running on port ${3000}`);
});

