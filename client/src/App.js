import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Registro from "./Components/Registro";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path='/registro' component={Registro}/>

    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
