const express = require("express");
const instance = express.Router();
const tasks = require("./products");

instance.get("/", (request, response) => {
  response.json(tasks);
});

instance.get("/:id", (request, response) => {
  const task = tasks.find(
    (eachTask) => eachTask.id === parseInt(request.params.id)
  );
  if (task) {
    return response.json(task);
  } else {
    response.status(404);
    response.send("Task not found");
  }
});

instance.post("/", (request, response) => {
  const { title, description } = request.body;
  if (!title || !description) {
    response.status(400).send("Title and description are required");
  } else {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    };
    tasks.push(newTask);
    response.send(newTask);
  }
});

instance.put("/:id", (request, response) => {
  const task = tasks.find(
    (eachTask) => eachTask.id === parseInt(request.params.id)
  );
  if (!task) {
    response.status(404).send("Task not found");
  } else {
    const { title, description, completed } = request.body;
    task.title = title;
    task.description = description;
    task.completed = completed;
    response.send(task);
  }
});

instance.patch("/:id", (request, response) => {
  const task = tasks.find(
    (eachTask) => eachTask.id === parseInt(request.params.id)
  );
  if (!task) {
    return response.status(404).send("Task not found");
  }
  const { title, description, completed } = request.body;
  if (title) task.title = title;
  if (description) task.description = description;
  if (completed !== undefined) task.completed = completed;
  response.send(task);
});

instance.delete("/:id", (request, response) => {
  const taskIndex = tasks.findIndex(
    (eachTask) => eachTask.id === parseInt(request.params.id)
  );
  if (taskIndex === -1) {
    return response.status(404).send("Task not found");
  } else {
    tasks.splice(taskIndex, 1);
    response.send("Task deleted");
  }
});

module.exports = instance;
