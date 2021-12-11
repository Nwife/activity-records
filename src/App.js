import { BrowserRouter, Switch, Route } from 'react-router-dom';

//page components
import Navbar from './componenets/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Activity from './pages/activities/Activity';
import ThemeSelector from './componenets/ThemeSelector';

//styles
import './App.css'
import { useTheme } from './hooks/useTheme';

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/activities/:id">
            <Activity/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
