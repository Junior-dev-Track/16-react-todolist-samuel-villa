export function SelectAll({ todos, setTodos }) {

    const handleSelectAllClick = event => {
        const newTodos = todos.map(item => ({...item, done: true}))
        setTodos(newTodos)
    }

    return (
        <div className="selectAll">
            <button className="select-all-btn" onClick={handleSelectAllClick}>Select All</button>
        </div>
    );
  }