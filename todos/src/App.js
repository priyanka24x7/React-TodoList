import TodoLists from './components/TodoLists';
import './App.scss';

function App() {
  return (
    <>
      <div className="todo-box">
        <div className="card">
          <div className="card-header">TO-DO LIST</div>
          <TodoLists/>
        </div>
      </div>
    </>
  );
}

export default App;
