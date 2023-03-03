# to_do_app

* Add new feature Checkbox


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
