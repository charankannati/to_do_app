const form = document.getElementById("todo-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = document.getElementById("todo-input");
  const task = input.value;
  input.value = "";
  const response = await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });
  const todo = await response.json();
  console.log(todo);
  updateTodoList();
});

const updateTodoList = async () => {
  const response = await fetch("http://localhost:3000/api/todos");
  const todos = await response.json();
  console.log(todos);
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  for (const todo of todos) {
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", async () => {
      const response = await fetch(
        `http://localhost:3000/api/todos/${todo._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed: checkbox.checked }),
        }
      );
      const updatedTodo = await response.json();
      console.log(updatedTodo);
    });

    item.appendChild(checkbox);
    item.appendChild(document.createTextNode(todo.task));
    list.appendChild(item);
  }
};

updateTodoList();
