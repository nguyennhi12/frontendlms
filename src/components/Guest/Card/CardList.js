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
      
      setCourse(props.coursesinfo)

  
   

    // });
   
  });
  return (
    <div>
     
     
      <Grid container className={classes.gridContainer} spacing={2}>
         { courses.length===0 && <span style={{marginTop:10,marginLeft:20}}>Không tìm thấy</span>}
        { courses.length >0  && courses.map(course=>(
            
             <Grid item xs={12} sm={3} md={3}>
                 <CardItem  key={course.id}  id={course.id} name={course.name} description ={course.description} img={course.urlLink} buttonfirst='Đăng ký'/>
               
           </Grid>
            
        ))}
      
      
        
      </Grid>
      
    </div>
  );
}

export default CardList;
