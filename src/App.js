import {BrowserRouter,Route,Switch} from"react-router-dom";
import ComponenteLuke from "./Components/ComponenteLuke/ComponenteLuke";


const App = ()=>{
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <ComponenteLuke/>}/>
          {/* <Route path="/:id" render={(routerProps)=>}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
