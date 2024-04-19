export function TodoItem() {
  return (
    <li></li>
  );
}


export function TodoList() {
  return (
    <ul>
      <li>
        <input type="checkbox" /> Item 1
      </li>
      <li>
        <input type="checkbox" /> Item 2
      </li>
    </ul>
  );
}


export function TaskForm() {
    return (
      <section className="formSection">
        <form action="submit">
            <label htmlFor="new-task">Enter New Task</label>
            <input id="new-task" name="new-task" type="text" />
            <input id="submitBtn" type="submit" value="Add ToDo" />
        </form>
        <TodoList />
      </section>
    );
  }

