const form = document.getElementById('todo-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const input = document.getElementById('todo-input');
  const task = input.value;
  input.value = '';
  const response = await fetch('http://localhost:3000/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ task }),
  });
  const todo = await response.json();
  console.log(todo);
  updateTodoList();
});

const updateTodoList = async () => {
    const response = await fetch('http://localhost:3000/api/todos');
    const todos = await response.json();
    console.log(todos);
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    for (const todo of todos) {
      const item = document.createElement('li');
      item.appendChild(document.createTextNode(todo.task));
      list.appendChild(item);
    }
};

updateTodoList();