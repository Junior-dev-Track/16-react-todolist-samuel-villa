export function DeleteAll({ todos, setTodos }) {

    const handleDeleteAllClick = event => {
        const undoneItems = todos.filter(item => !item.done)
        setTodos(undoneItems)
    }

    return (
        <div className="deleteAll">
            <button className="delete-all-btn" onClick={handleDeleteAllClick}>Delete All</button>
        </div>
    );
  }