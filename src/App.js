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

import quanlykhoahoc from './components/Student/CourseManager';
import CourseManager from './components/Student/CourseManager';

import { HomeStudent } from './pages/HomeStudent';
import Rating from './components/Student/Rating/StudentRating'

function App() {
  return (
    <Router>
        <CourseManager></CourseManager>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/trangchuteacher" exact component={HomeTeacher}/>
          <Route path="/doimatkhau" exact component={DoiMatKhau}/>
          <Route path="/dangnhap" exact component={Login}/>
          <Route path="/quenmatkhau" exact component={QuenMatKhau}/>
          <Route path="/dangky" exact component={Register}/>
          <Route path="/thongtinkhoahoc" exact component={InfoCourse}/>
          <Route path="/danhsachkhoahoc" exact component={ListCourse}/>

          <Route path="/quanlykhoahocstudent" exact component={quanlykhoahoc}/>

          <Route path="/trangchustudent" exact component={HomeStudent}/>
          <Route path="/rating" exact component={Rating}/>





         </Switch> 
    </Router>
  );
}

export default App;
