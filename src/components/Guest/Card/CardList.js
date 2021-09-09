import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-bootstrap/Carousel";

import callApi from "../../../api/apiService";

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
function CardList(props) {
  const classes = useStyles();
  const [courses, setCourse] = useState([]);
  
  useEffect(() => {
    // Update the document title using the browser API
    // callApi(`Course/searchCourse?searchCourse=&pageSize=8&pageNumber=1`, "GET").then((res) => {
        // console.log(res.data.data[0].name)
      //  setCourse(res.data.data)
      setCourse(props.coursesinfo)

  
   

    // });
   
  });
  return (
    <div>
     
     
      <Grid container className={classes.gridContainer} spacing={2}>
          
        { courses.length  && courses.map(course=>(
            
             <Grid item xs={12} sm={3} md={3}>
                 <CardItem  key={course.id} name={course.name} description ={course.description} img={course.urlLink}/>
               
           </Grid>
            
        ))}
      
      
        
      </Grid>
      
    </div>
  );
}

export default CardList;
