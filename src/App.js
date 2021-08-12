import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import HomeTeacher from './pages/HomeTeacher';
import DoiMatKhau from './pages/DoiMatKhau';
import Login from './components/Guest/Login';
import QuenMatKhau from './components/Guest/Forgotpassword';
import Register from './components/Register';
import InfoCourse from './components/Guest/InfoCourse';
import ListCourse from './components/Guest/ListCourse';
function App() {
  return (
    <Router>
  
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/trangchuteacher" exact component={HomeTeacher}/>
          <Route path="/doimatkhau" exact component={DoiMatKhau}/>
          <Route path="/dangnhap" exact component={Login}/>
          <Route path="/quenmatkhau" exact component={QuenMatKhau}/>
          <Route path="/dangky" exact component={Register}/>
          <Route path="/thongtinkhoahoc" exact component={InfoCourse}/>
          <Route path="/danhsachkhoahoc" exact component={ListCourse}/>



         </Switch>
    </Router>
  );
}

export default App;
