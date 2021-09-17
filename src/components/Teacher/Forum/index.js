import React, { useState, useEffect } from "react";
import SidebarTeacher from "../SidebarTeacher/SidebarTeacher";
import Comment from "../Forum/Comment/Comment";
import { DataGrid } from "@material-ui/data-grid";
import "./index.css";
import callApi from "../../../api/apiService";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Form } from "react-bootstrap";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Button } from "@material-ui/core";
import Notification from "../../Notification/Notification";
import SaveIcon from "@material-ui/icons/Save";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Forum from "../../../images/undraw_Usability_testing_re_uu1g.svg";
import Navbar from "../../Guest/Navbar/Navbar";
import ConfirmDialog from "../../Notification/ConfirmDialog";
function Index() {
  const [forum, setForum] = useState([]);
  const history = useHistory();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subtitle: "",
  });
  // Watch
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [Image, setImage] = useState();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [idUpdate, setIdUpdate] = useState([]);
  const [openUpdateForum, setOpenUpdateFrom] = useState(false);

  // Update forum 

  const [titleUpdate, setTitleUpdate] = useState();
  const [contentUpdate, setContentUpdate] = useState();
  const [ImageUpdate, setImageUpdate] = useState();



  const setDeleteHide = () => {
    if (localStorage.getItem("role") === "INSTRUCTOR") {
      return false;
    } else {
      return true;
    }
  };
  var setDelete = setDeleteHide();
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleInputContent = (e) => {
    setContent(e.target.value);
  };
  const handleInputImage = (e) => {
    setImage(e.target.files[0]);
  };

  // Update

  const handleUpdateInputTitle = (e) => {
    setTitleUpdate(e.target.value);
  };
  const handleUpdateInputContent = (e) => {
    setContentUpdate(e.target.value);
  };
  const handleUpdateInputImage = (e) => {
    setImageUpdate(e.target.files[0]);
  };




  // Lây data để update
  const showupdateForum = (idForum) =>{
    callApi(`Forums/getForum/${idForum}`, "GET")
    .then((res) => {
      console.log(res);
      setTitleUpdate(res.data.data.title)
      setContentUpdate(res.data.data.content)
     
    })
    .catch((err) => {
      console.log(err);
    });

  }

  const saveUpdateForum = (e) =>{
    
    e.preventDefault();
    const id = idUpdate.toString()
    var formdata = new FormData();
    formdata.append("Title", titleUpdate);
    formdata.append("Content", contentUpdate);
    formdata.append("UrlImage", ImageUpdate);
    callApi(`Forums/updateForums/${id}`, "PUT", formdata)
    .then((res) => {
      console.log(res);
      setNotify({
        isOpen: true,
        message: "Chỉnh sửa thành công chủ đề",
        type: "success",
      });
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });

  }





  const buttonTitle = (e) => {
    e.preventDefault();

    var formdata = new FormData();
    formdata.append("Title", title);
    formdata.append("Content", content);
    formdata.append("UrlImage", Image);

    callApi(`Forums/createForums`, "POST", formdata)
      .then((res) => {
        console.log(res);
        setNotify({
          isOpen: true,
          message: "Tạo thành công chủ đề",
          type: "success",
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  {
    console.log(forum);
  }
  useEffect(() => {
    // Update the document title using the browser API
    callApi(`Forums/getAllForums`, "GET").then((res) => {
      console.log(res.data.data);
      setForum(res.data.data);
    });
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",

      hide: true,
    },

    {
      field: "urlImage",
      headerName: "Hình ảnh",
      width: 140,
      renderCell: (params) => (
        <img
          src={`${params.value}`}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            marginLeft: 10,
          }}
        />
      ),
    },

    {
      field: "title",
      headerName: "Chủ đề",
      width: 300,

      renderCell: (params) => (
        <Link
          to={{
            pathname: `/diendan/thaoluan`,
            state: {
              idForum: `${params.getValue(params.id, "id")}`,
              contentTitle: `${params.value}`,
              content: `${params.getValue(params.id, "content")}`,
              image: `${params.getValue(params.id, "urlImage")}`,
            },
          }}
          style={{ textDecoration: "none" }}
        >
          {`${params.value}`}
        </Link>
      ),
    },
    {
      field: "content",
      headerName: "Nội dung",
      width: 500,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 80,
    },

    {
      field: "",
      headerName: "Xóa",
      width: 100,
      hide: setDelete,

      renderCell: (params) => (
        <Button
          variant="contained"
          style={{backgroundColor:'#eb7d51',color:'#fff'}}
          onClick={() => {
            setConfirmDialog({
              isOpen: true,
              title: "Bạn muốn xóa chủ đề này ?",
              subtitle: "Bạn không thể hoàn tác",
              confirm: () => {
                buttonDeleteForum(params.getValue(params.id, "id"));
              },
            });
          }}
        >
          Xóa
        </Button>
      ),
    },
    {
      field: "edit",
      headerName: "Chỉnh sửa",
      width: 110,
      hide: setDelete,

      renderCell: (params) => (
        <Button
          variant="contained"
          style={{backgroundColor:'#fed813',color:'#fff'}}
          onClick={()=>{setOpenUpdateFrom(true);showupdateForum(params.getValue(params.id, "id"))}}
        >
          Chỉnh sửa
        </Button>
      ),
    },
  ];

  const buttonDeleteForum = async (idForum) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    callApi(`Forums/deleteForums/${idForum}`, "DELETE")
      .then((res) => {
        console.log(res);

        setNotify({
          isOpen: true,
          message: "Xóa thành công",
          type: "success",
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="wrap-forum">
        {/* <SidebarTeacher /> */}
        <div className="forum">
          <h3 style={{ fontWeight: 600, marginLeft: 470 }}>
            DIỄN ĐÀN THẢO LUẬN
          </h3>
          <img
            src={Forum}
            style={{
              width: "400px",
              height: "400px",
              marginLeft: 450,
              display: "block",
            }}
          />
          {localStorage.getItem("role") === "INSTRUCTOR" && (
            <Button
              variant="contained"
              style={{ color: "#fff", backgroundColor: "#055031" }}
              onClick={handleOpen}
              startIcon={<CloudUploadIcon />}
            >
              Thêm chủ đề thảo luận
            </Button>
          )}

          {open && (
            <Form style={{ marginTop: 30, width: "80%" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Chủ đề</Form.Label>
                <Form.Control
                  placeholder="Tên chủ đề"
                  value={title}
                  onChange={handleInputTitle}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Nội dung</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  value={content}
                  onChange={handleInputContent}
                />
              </Form.Group>
              <Form.Label>Hình ảnh chủ đề</Form.Label>
              <input
                type="file"
                onChange={handleInputImage}
                style={{ display: "block" }}
              />

              <Button
                variant="contained"
                style={{ color: "#fff", backgroundColor: "#055031" }}
                size="large"
                onClick={buttonTitle}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Form>
          )}
        </div>
        <h4 style={{ marginTop: 20 }}>Chủ Đề Thảo Luận</h4>
        <div style={{ height: 400, marginTop: 20, width: "96%" }}>
          <DataGrid
            rows={forum}
            columns={columns}
            pageSize={5}
            onSelectionModelChange={(item) => {
              setIdUpdate(item);
            }}
          />
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      {openUpdateForum && (
        <div className="wrap_updateform">
         
          <Form style={{ margin: "100px auto", width: "50%" }} className="form-update">
          <span className="close-button-update" onClick={()=>{setOpenUpdateFrom(false)}}>
            x
          </span>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Chủ đề</Form.Label>
              <Form.Control
                placeholder="Tên chủ đề"
                value={titleUpdate}
                onChange={handleUpdateInputTitle}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                value={contentUpdate}
                onChange={handleUpdateInputContent}
              />
            </Form.Group>
            <Form.Label>Hình ảnh chủ đề</Form.Label>
            <input
              type="file"
              onChange={handleUpdateInputImage}
              style={{ display: "block" }}
            />

            <Button
              variant="contained"
              style={{ color: "#fff", backgroundColor: "#055031" }}
              size="large"
              onClick={saveUpdateForum}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default Index;
