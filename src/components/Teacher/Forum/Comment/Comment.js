import React, { useState, useEffect } from "react";
import Avatar from "../../../../images/avatar.png";
import "./Comment.css";
import callApi from "../../../../api/apiService";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Notification from "../../../Notification/Notification";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
function Comment(props) {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState();
  // Mở form edit
  const [edit, setEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState();
  const [listcomment, SetComment] = useState([]);
  const [content, setContent] = useState();
  const [Image, setImage] = useState();
  const [idUser, setIdUser] = useState();
  const [idCommentCurrent,setIdCommentCurrent] = useState()
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  console.log("hello",idCommentCurrent)

  const handleDataEdit = (e) => {
    setDataEdit(e.target.value);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const getIdCurrent = () => {
    callApi(`Authentication/getUser`, "GET")
      .then((res) => {
        console.log(res);
        setIdUser(res.data.data.userId);
      })
      .catch((err) => {
        console.log(err);
      });
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
    reloadData();
    getIdCurrent();
  }, []);

  const reloadData = () => {
    callApi(`Comment/getAllComment/` + props.idForum, "GET")
      .then((res) => {
        console.log(res);
        SetComment(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editComment = (id) => {
    var data = {
      content: dataEdit,
    };
    callApi(`Comment/updateComment/${id}`, "PUT", data)
      .then((res) => {
        console.log(res);
        setEdit(false);
        setNotify({
          isOpen: true,
          message: "Chỉnh sửa bình luận thành công",
          type: "success",
        });
        reloadData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteComment = (id) => {
    callApi(`Comment/deleteComment/${id}`, "DELETE")
      .then((res) => {
        console.log(res);
        setNotify({
          isOpen: true,
          message: "Đã xóa bình luận",
          type: "success",
        });
        reloadData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const buttonAnswer = (e) => {
    e.preventDefault();

    var data = {
      idForum: props.idForum,
      content: answer,
    };

    console.log(data);
    if (localStorage.getItem("accessToken") != null) {
      callApi(`Comment/createComment`, "POST", data)
        .then((res) => {
          console.log(res);

          setOpen(!open);
          setAnswer("");
          // window.location.reload()
          reloadData();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setNotify({ isOpen: true, message: "Bạn chưa đăng nhập", type: "error" });
    }
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
      {listcomment.length === 0 && <span>Chưa có câu trả lời nào</span>}

      {listcomment.map((item) => (
        <>
          <div className="comment-card">
            <div className="comment-card__header">
              <div className="comment-card__info">
                {item.urlImage == null && (
                  <img
                    src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
                    className="comment-card__img"
                  />
                )}

                {item.urlImage != null && (
                  <img src={item.urlImage} className="comment-card__img" />
                )}

                <div className="comment-card__name">
                  <div className="comment-card__name-label">Username</div>
                  <div className="comment-card__name-username">
                    {item.user.displayName}
                  </div>
                </div>
              </div>

              <div className="comment-card__date">
                <div className="comment-card__date-label">Date</div>
                <div className="comment-card__date-info">22/8/2021</div>
              </div>
              {item.idUser === idUser && (
                <div className="comment-update-icons">
                  <EditIcon
                    onClick={() => {
                      setEdit(true);
                      setDataEdit(item.content)
                      setIdCommentCurrent(item.id)
                      
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <DeleteIcon
                    onClick={() => {
                      deleteComment(item.id);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              )}
            </div>

            <div className="comment-card__body">
              <div className="comment-card__body-content">{item.content}</div>
            </div>
          </div>
         
          {item.idUser === idUser && edit && item.id ===idCommentCurrent && (
            <>
           
            <div className="comment-card__body">
              <input
                className="comment-card__body-content_input"
                value={dataEdit}
                onChange={handleDataEdit}
              />
              <div className="comment-card__body-btn">
                <div
                  className="comment-card__save"
                  onClick={() => {
                    editComment(item.id);
                  }}
                >
                  Lưu
                </div>
                <div
                  className="comment-card__cancel"
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  Hủy
                </div>
              </div>
            </div>
            </>
          )}
        </>
      ))}

      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default Comment;
