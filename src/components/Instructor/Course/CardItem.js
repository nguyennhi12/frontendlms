import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import callApi from "../../../api/apiService";
import ConfirmDialog from "../../Notification/ConfirmDialog";
import Logo from "../../../images/homecourse.png";
import Notification from "../../Notification/Notification";
import Avatar from "@material-ui/core/Avatar";
import Suakhoahoc from "../Suakhoahoc";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from "react-router-dom";
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
    right:0
  }
});

export default function CardItem(props) {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const togglePopup = () => {
    setOpen(!isOpen);
  };

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [isDelete, setDelete] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subtitle: "",
  });

  const buttonDoneCourse = async (e) => {
    callApi(`Course/doneCourse/${props.id}`, "GET")
      .then((res) => {
        console.log(res);

        setNotify({
          isOpen: true,
          message: "Done khóa học",
          type: "success",
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const buttonOpenCourse = async (e) => {
    callApi(`Course/openAgainCourse/${props.id}`, "GET")
      .then((res) => {
        console.log(res);

        setNotify({
          isOpen: true,
          message: "Mở lại khóa học",
          type: "success",
        });
        window.location.reload();
      })
      .catch((err) => {
       
        console.log(err);
      });
  };

  const buttonDelete = async (e) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    callApi(`Course/deleteCourse/${props.id}`, "DELETE")
      .then((res) => {
        console.log(res);

 
          setNotify({
            isOpen: true,
            message: "Xóa thành công",
            type: "success",
          });
          window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card className={classes.root}>
        {props.status === "STUDYING" && (
          <CardHeader
            style={{ height: 20 }}
            subheader={props.status}
            action={
              <Link to={`/course/${props.id}`} style={{textDecoration:"none"}}>

              <IconButton aria-label="settings" className={classes.icon}>
                <AssignmentIcon/>
              </IconButton>
              </Link>
            }
          />
        )}
        {props.status !== "STUDYING" && (
          <CardHeader style={{ height: 20 }} subheader={props.status} />
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
          <Button size="small" color="primary" onClick={togglePopup}>
            Edit
          </Button>
          {props.status !== "DELETED" && (
            <Button
              size="small"
              color="primary"
              onClick={() => {
                setConfirmDialog({
                  isOpen: true,
                  title: "Bạn muốn xóa khóa học này ?",
                  subtitle: "Bạn không thể hoàn tác",
                  confirm: () => {
                    buttonDelete();
                  },
                });
              }}
            >
              Delete
            </Button>
          )}
          {props.status !== "DELETED" &&
            props.status !== "DONE" &&
            props.status !== "ACTIVE" && (
              <Button size="small" color="primary" onClick={buttonDoneCourse}>
                Done
              </Button>
            )}
          {(props.status === "DELETED" || props.status === "DONE") && (
            <Button size="small" color="primary" onClick={buttonOpenCourse}>
              Open
            </Button>
          )}
        </CardActions>
      </Card>

      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
        <Notification notify={notify} setNotify={setNotify} />
      {isOpen && (
        <Suakhoahoc
          courseid={props.id}
          handleClose={togglePopup}
          coursename={props.name}
          courseinfo={props.courseinfo}
        />
      )}
    </>
  );
}
