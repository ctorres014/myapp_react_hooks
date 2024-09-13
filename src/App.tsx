import Counter from "./components/Counter";
import User from "./components/User";
import TimerParent from './components/TimerParent';
import ContadorR from './components/ContadorR';
import Formulario from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";



function App() {
  return (
    <div>
      <h1>React + TypeScript</h1>
      <h2>useState</h2>
      <Counter></Counter>
      <User></User>
      <hr />
      <h2>useEffect - useRef</h2>
      <TimerParent></TimerParent>
      <hr />
      <h2>useReducer</h2>
      <ContadorR/>
      <hr />
      <h2>CustomHook</h2>
      <Formulario></Formulario>
      <hr />
      <Formulario2></Formulario2>
    </div>
  );
}

export default App;
