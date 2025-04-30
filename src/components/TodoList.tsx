import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addTodo, toggleTodo, removeTodo, clearTodos } from '../features/todo/todoSlice';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Assign a new task..."
            className="flex-1 border border-gray-300 rounded px-3 py-2"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </form>

      <ul className="mb-4 divide-y divide-gray-200">
        {todos.length === 0 ? (
          <li className="py-2 text-gray-500 italic">No tasks added yet</li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="py-2 flex justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                  className="h-5 w-5"
                />
                <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>

      {todos.length > 0 && (
        <button
          onClick={() => dispatch(clearTodos())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-red-500 w-full"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default TodoList;