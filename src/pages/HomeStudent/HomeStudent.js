import React, { useState, useEffect } from "react";
import CardItem from "../../components/Guest/Card/CardItem";
import Sidebar from "../../components/Student/SidebarStudent/Sidebar";
import { BsSearch } from "react-icons/bs";
import "./homestudent.css";
import { makeStyles } from "@material-ui/core/styles";
import callApi from "../../api/apiService";
import { Grid } from "@material-ui/core";
import { Search } from "@material-ui/icons";

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
export const HomeStudent = () => {
  const [courses, setCourse] = useState([]);
  const [find,setFind] = useState('')
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
 

  const togglePopup = () => {
    setOpen(!isOpen);
  };
  const handleInput = (e) =>{
      setFind(e.target.value)
  }
  const handleSearch = () => {
      
    search(find);
  };

  const search = (e) => {
      e.preventDefault();
    // Update the document title using the browser API
    callApi(
      `Course/searchCourse?searchCourse=${find}&pageSize=8&pageNumber=1`,
      "GET"
    ).then((res) => {
      // console.log(res.data.data[0].name)
      setCourse(res.data.data);
    });
  };

  useEffect(() => {
    // Update the document title using the browser API
    callApi(
      `Course/searchCourse?searchCourse=&pageSize=8&pageNumber=1`,
      "GET"
    ).then((res) => {
     
      setCourse(res.data.data);
    });
  }, []);

  return (
    <div className="homestudent">
      <Sidebar />
      <div className="contentt">
        {/* <div className="wrapper-input">
          <input type="text" placeholder="Tìm kiếm" className="search"  onChange={handleInput}/>
          <button onClick={search}>Search</button>
             <Search onClick={search} style={{cursor:'pointer',marginLeft:'10px',fontSize:'30px'}}/> 
        </div> */}
        <div>
          <Grid container className={classes.gridContainer} spacing={2}>
            {courses.length > 0 &&
              courses.map((course) => (
                <Grid item xs={12} sm={3} md={3}>
                  <CardItem
                    courseinfo={course}
                    name={course.name}
                    description={course.description}
                    id={course.id}
                    img={course.urlLink}
                    buttonfirst="Học ngay"
                  />
                </Grid>
              ))}
               {courses.length == 0 && <span style={{marginTop:'30px'}}>Không tìm thấy</span>}
              
          </Grid>
        </div>
      </div>
    </div>
  );
};
