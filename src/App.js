import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import HomeTeacher from './pages/HomeTeacher';
import DoiMatKhau from './pages/DoiMatKhau';
function App() {
  return (
    <Router>
  
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/trangchuteacher" exact component={HomeTeacher}/>
          <Route path="/doimatkhau" exact component={DoiMatKhau}/>
        </Switch>
    </Router>
  );
}

export default App;
