import React,{useState,useEffect} from 'react'
import SidebarTeacher from '../../components/Teacher/SidebarTeacher/SidebarTeacher'
import CourseItem from '../../components/Teacher/Course/CardItem'
import Topbar from '../../components/Teacher/Topbar/Topbar'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './HomeTeacher.css'
import callApi from "../../api/apiService";
import Notification from '../../components/Notification/Notification';


const useStyles = makeStyles({
    gridContainer: {
      width: "95%",
    },
    listText: {
      fontSize: "1.5rem",
      color: "#363740",
      display: "block",
      marginTop: "20px",
      marginLeft: "20px",
    },
}
)
function HomeTeacher() {
   const [courses,setCourse] = useState([])
    const [notify, setNotify] = useState({
      isOpen: false,
      message: "",
      type: "",
    });
    const classes = useStyles();
    useEffect(() => {
      
        callApi(
          `Course/searchHistoryCourse?searchCourse=&status=ALL&pageNumber=1&pageSize=8`,
          "GET"
        ).then((res) => {
          // console.log(res.data.data[0].name);
          setCourse(res.data.data);
        }); 
      }, []);
    return (
      <>
        <div style={{ display:'flex'}}>
            
            <SidebarTeacher/>
            <div className="contentt">
                <Topbar/>
                <div>
            <Grid container className={classes.gridContainer} spacing={2}>
              {courses.length > 0 &&
                courses.map((course) => (
                  <Grid item xs={12} sm={3} md={3}>
                    <CourseItem
                      courseinfo={course}
                      name={course.name}
                      description={course.description}
                      id={course.id}
                      img={course.urlImage}
                      status = {course.status}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
                
             
               
            </div>
           

        </div>
        <Notification notify={notify} setNotify={setNotify} />
        </>
    )
}

export default HomeTeacher
