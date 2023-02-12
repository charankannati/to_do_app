const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb+srv://charan:0UwLSGmpttnmcZzL@cluster0.apsu8fn.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('strictQuery',false)

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});



const Todo = mongoose.model('Todo', todoSchema);



app.post('/api/todos', async (req, res) => {
  const todo = new Todo({ task: req.body.task });
  try {
    await todo.save();
    res.send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/todos', async (req, res) => {
    try {
      const todos = await Todo.find({});
      res.send(todos);
    } catch (error) {
      res.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});