import { h, text, app } from "hyperapp";

const AddTodo = (state) => ({
  ...state,
  todos: state.todos.concat(state.value),
});

const NewValue = (state, event) => ({
  ...state,
  value: event.target.value,
});

app({
  init: { todos: [], value: "" },
  view: ({ todos, value }) => (
    <main>
      <input type="text" oninput={NewValue} value={value} />
      <button onclick={AddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </main>
  ),
  node: document.getElementById("app"),
});
