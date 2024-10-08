const express = require("express");
const bodyParser = require("body-parser");
const taskRouter = require("./index");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/tasks", taskRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
