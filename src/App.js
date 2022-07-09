import { render } from "@testing-library/react";
import "./App.css";
import TodoHeader from "./components/todoheader/todoHeader";

const App = () => {
  return (
    <div className="app">
      <TodoHeader />
    </div>
  );
};

export default App;
