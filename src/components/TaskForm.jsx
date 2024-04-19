export function TodoItem() {
  return (
    <li></li>
  );
}


export function TodoList() {
  return (
    <ul>
      <div className="liDiv"><input type="checkbox" id="myCheckbox" name="myCheckbox" value="checkboxValue"></input><li>Task 1</li></div>
      <div className="liDiv"><input type="checkbox" id="myCheckbox" name="myCheckbox" value="checkboxValue"></input><li>Task 2</li></div>
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

