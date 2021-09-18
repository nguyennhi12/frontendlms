import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import { Assessment } from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';
import Logo from "../../../images/homecourse.png";
import Rating from "../../Student/Rating/StudentRating"
const useStyles = makeStyles({
  root: {
    maxHeight: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "20px",
    height: "100%",
    position:'relative'
  },
  action: {},
  cardcontent: {
    display: "flex",
    flexDirection: "column",
    marginTop: "auto",
    flex: 1,
  },
  test: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "break-all",
    overflow: "hidden",
  },
  icon:{
    position :'absolute',
    top:-6,
    right:0,
    width:50,
    height:50
  }
});

export default function CourseStudent(props) {
  const classes = useStyles();
  const [openRating, setOpenRating] = useState(false);

  const togglePopup = () => {
    setOpenRating(!openRating);
  };
  return (
    <>
    <Card className={classes.root}>
       {props.status === "DONE" && (
       <CardHeader
            style={{ height: 20 }}
            subheader={props.status}
            action={
              

              <IconButton aria-label="settings" className={classes.icon} onClick={togglePopup}>
                <Assessment/>
              </IconButton>
            
            }
           
          />
       )}
        {props.status === "STUDYING" && (
          <CardHeader
            style={{ height: 20 }}
            subheader={props.status}
           
           
          />
        )}
        {props.status === "ACTIVE" && (
          <CardHeader
            style={{ height: 20 }}
            subheader={props.status}
           
           
          />
        )}
      <CardActionArea className={classes.action}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardcontent}>
          <Typography
            gutterBottom
            variant="h5"
            component="h4"
            height="50"
            noWrap
          >
            {props.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.test}
            style={{ flex: 1 }}
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        {localStorage.getItem("role") === "STUDENT"  && (
          <Link
            to={`/student/chitietkhoahoc?idCourse=${props.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button size="small" color="primary">
              {props.buttonfirst}
            </Button>
          </Link>
        )}

        <Button size="small" color="primary">
          {props.buttonsecond}
        </Button>
      </CardActions>
    </Card>
    {
      openRating && (<Rating name={props.name} id={props.id} handleClose={togglePopup}/>)

    }
    </>
  );
}
