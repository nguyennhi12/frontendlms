import React, { useState, useEffect } from "react";
import SidebarInstructor from "../../components/Instructor/SidebarInstructor/SidebarInstructor";
import Topbar from "../../components/Instructor/Topbar/TopbarInstructor";
import "./homeinstructor.css";
import CourseItem from "../../components/Instructor/Course/CardItem";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import callApi from "../../api/apiService";
import { Link } from "react-router-dom";
import Notification from "../../components/Notification/Notification";
import Themkhoahoc from "../../components/Instructor/Themkhoahoc";

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
});
function HomeInstructor() {
  const [courses, setCourse] = useState([]);
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const togglePopup = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    // Update the document title using the browser API
    callApi(
      `Course/searchHistoryCourse?searchCourse=&status=ALL&pageNumber=1&pageSize=19`,
      "GET"
    ).then((res) => {
     
      setCourse(res.data.data);
    });
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <SidebarInstructor />
        <div className="contentt">
          <Topbar />

          <button className="button-add btn-primary btn" onClick={togglePopup}>
            Thêm khóa học
          </button>

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
        {isOpen && <Themkhoahoc handleClose={togglePopup} />}
      </div>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default HomeInstructor;
