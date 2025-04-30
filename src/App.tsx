import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Redux Toolkit Example 🧰</h1>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Counter />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;