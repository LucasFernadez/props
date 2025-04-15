function Task({ task, deleteTask, toggleTask }) {
    return (
      <li
        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
        <button onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}>
          Eliminar
        </button>
      </li>
    );
  }
  
  export default Task;
  