import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import callApi from "../../../api/apiService";
import ConfirmDialog from "../../Notification/ConfirmDialog";
import Logo from "../../../images/homecourse.png";
import Notification from "../../Notification/Notification";
import Suakhoahoc from "../Suakhoahoc";
const useStyles = makeStyles({
  root: {
    maxHeight: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "20px",
    height: "100%",
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
});

export default function CardItem(props) {
  const classes = useStyles();
  const [isOpen,setOpen] = useState(false);
  

  const togglePopup = () =>{
    setOpen(!isOpen)
  }

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

  const buttonDelete = async (e) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    callApi(`Course/deleteCourse/${props.id}`, "DELETE")
      .then((res) => {
        console.log(res);

        if (res.data.success == "true") {
          setNotify({
            isOpen: true,
            message: "Xóa thành công",
            type: "success",
          });
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      
      });
  };

  return (
    <>
      <Card className={classes.root}>
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
        </CardActions>
      </Card>

      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      {
        isOpen && <Suakhoahoc courseid ={props.id} handleClose={togglePopup} coursename={props.name} courseinfo={props.courseinfo}/>
      }
    </>
  );
}
