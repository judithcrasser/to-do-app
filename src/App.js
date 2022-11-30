import './App.css';
import TodoList from './components/TodoList';

import { fas } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(fas);

function App() {

  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
