export function Filter({ setFilter }) {

    const handleFilterClick = event => {
        const filterValue = event.target.getAttribute('data-filter');
        setFilter(filterValue)
    }

    return (
        <div className="filter">
            <h2>3</h2>
            <hr></hr>
            <button className="filter-btn" data-filter="all" onClick={handleFilterClick}>All</button>
            <button className="filter-btn" data-filter="done" onClick={handleFilterClick}>Done</button>
            <button className="filter-btn" data-filter="todo" onClick={handleFilterClick}>To Do</button>
        </div>
    );
  }