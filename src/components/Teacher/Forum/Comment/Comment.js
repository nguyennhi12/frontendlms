import React, { useState, useEffect } from "react";
import Avatar from "../../../../images/avatar.png";
import "./Comment.css";
import callApi from "../../../../api/apiService";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
function Comment(props) {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState();
  const [listcomment, SetComment] = useState([]);
  const [content, setContent] = useState();
  const [Image, setImage] = useState();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleInputAnswer = (e) => {
    setAnswer(e.target.value);
  };
  const handleInputContent = (e) => {
    setContent(e.target.value);
  };
  const handleInputImage = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
      reloadData()
  }, []);

  const reloadData = () =>{
    callApi(`Comment/getAllComment/` + props.idForum, "GET")
      .then((res) => {
        console.log(res);
        SetComment(res.data.data);
     
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const buttonAnswer = (e) => {
    e.preventDefault();

 

    var data = {
      idForum: props.idForum,
      content: answer,
    };

    console.log(data);

    callApi(`Comment/createComment`, "POST", data)
      .then((res) => {
        console.log(res);
      
        setOpen(!open);
        setAnswer("");
        // window.location.reload() 
        reloadData()
      })
      .catch((err) => {
        console.log(err);
      });

      
  };

  return (
    <>
      <Form style={{ marginLeft: 0, width: 800, marginBottom: 60 }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            placeholder="Nhập câu trả lời"
            value={answer}
            onChange={handleInputAnswer}
            style={{ outline: "none" }}
          />
        </Form.Group>

        <Button
          variant="contained"
          style={{ color: "#fff", backgroundColor: "#055031", float: "right" }}
          type="submit"
          onClick={buttonAnswer}
        >
          Trả lời
        </Button>
      </Form>

      {listcomment.length &&
        listcomment.map((item) => ( 
          <div className="comment-card">
            <div className="comment-card__header">
              <div className="comment-card__info">
                {item.urlImage ==null && (
                  <img
                    src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
                    className="comment-card__img"
                  />
                )}

                {item.urlImage!=null && (
                  <img
                    src={item.urlImage}
                    className="comment-card__img"
                  />
                )}

                <div className="comment-card__name">
                  <div className="comment-card__name-label">Student</div>
                  <div className="comment-card__name-username">
                    {item.user.displayName}
                  </div>
                </div>
              </div>

              <div className="comment-card__date">
                <div className="comment-card__date-label">Date</div>
                <div className="comment-card__date-info">22/8/2021</div>
              </div>
            </div>
            <div className="comment-card__body">
              {/* <div className="comment-card__body-title">Nice</div> */}
              <div className="comment-card__body-content">{item.content}</div>
            </div>
          </div>
        ))}
      {/* {open && (
        <Form style={{ marginLeft: 30, width: 770 }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              placeholder="Nhập câu trả lời"
              value={answer}
              onChange={handleInputAnswer}
              style={{ outline: "none" }}
            />
          </Form.Group>

          <span
            className="comment-card__body-reply comment-ans"
            onClick={buttonAnswer}
          >
            Lưu
          </span>
        </Form>
      )} */}
    </>
  );
}

export default Comment;
