import './App.css'
import Use from "./components/use/Use.jsx";
import Action from "./components/action/Action.jsx";
import UseActionState from "./components/useActionState/UseActionState.jsx";
import UseOptimistic from "./components/useOptimistic/UseOptimistic.jsx";

function App() {
  return (
    <div className="app">
      {/* <Use /> */}
      {/* <Action /> */}
      {/* <UseActionState /> */}
      <UseOptimistic />
    </div>
  );
}

export default App;
