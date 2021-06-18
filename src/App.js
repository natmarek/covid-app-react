import { CountryPage } from "./components/CountryPage";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { ListOfCountriesPage } from "./components/ListOfCountriesPage";
//import { browserHistory } from './react-router'

const Routes = () => (
  <Switch>
    <Route path="/blog">
      <h1>Blog</h1>
    </Route>
    <Route path="/:slug" children={<CountryPage />} />
    <Route path="/">
      <ListOfCountriesPage key="root page" />
    </Route>
  </Switch>
);

const App = () => {
  return (
    <div className="App-header">
      {" "}
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
