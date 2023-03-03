# to_do_app

* Add new feature Checkbox

```

//index.js
const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', async () => {
      const response = await fetch(`http://localhost:3000/api/todos/${todo._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: checkbox.checked }),
      });
      const updatedTodo = await response.json();
      console.log(updatedTodo);
});

item.appendChild(checkbox);

//app.js
app.patch('/api/todos/:id', async (req, res) => {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, { completed: req.body.completed }, { new: true });
      if (!todo) {
        return res.status(404).send();
      }
      res.send(todo);
    } catch (error) {
      res.status(400).send(error);
    }
});
```
