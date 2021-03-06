import React, { useState, useEffect } from "react";
import CourseStudent from "../../Guest/Card/CourseStudent";
import Sidebar from "../SidebarStudent/Sidebar";
import { BsSearch } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";
import callApi from "../../../api/apiService";
import { Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import "./style.css";
import Rating from "../../Student/Rating/StudentRating"
import CalendarDeadline from "../../Calendar/CalendarDeadline";

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
function QuanLyKhoaHoc() {
  const [data, setData] = useState([]);
  const [find, setFind] = useState("");
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
 

  useEffect(() => {
    // Update the document title using the browser API
    callApi(
      `Course/searchHistoryCourse?searchCourse=&status=ALL&pageNumber=1&pageSize=19`,
      "GET"
    ).then((res) => {
      setData(res.data.data);
      //   console.log(res)
      //   console.log(data[0].course)
    });
  }, []);
  return (
    <>
    <div className="homestudent">
      <Sidebar />

      <div className="contentt">
        <div className="contentt-calendar">
          <h4>Lịch deadline</h4>
          <CalendarDeadline />
        </div>
        <h4>Các khóa học đã đăng ký</h4>
        <div className="student-deadline"></div>
        <div>
          <Grid container className={classes.gridContainer} spacing={2}>
            {data.length > 0 &&
              data.map((item) => (
                <Grid item xs={12} sm={3} md={3}>
                  <CourseStudent
                    courseinfo={item.course}
                    name={item.course.name}
                    description={item.course.description}
                    id={item.course.id}
                    img={item.course.urlImage}
                    buttonfirst="Học ngay"
                    status={item.course.status}
                  />
                </Grid>
              ))}
            {data.length == 0 && (
              <span style={{ marginTop: "30px" }}>Không tìm thấy</span>
            )}
          </Grid>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default QuanLyKhoaHoc;
