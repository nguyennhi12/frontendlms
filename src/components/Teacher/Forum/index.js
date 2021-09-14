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
import Forum from "../../../images/undraw_Usability_testing_re_uu1g.svg"
import Navbar from "../../Guest/Navbar/Navbar";
function Index() {
  const [forum, setForum] = useState([]);
  const history = useHistory();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [Image, setImage] = useState();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [idTest, setIdTest] = useState([]);
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
          style={{ width: "40px", height: "40px",borderRadius:"50%",marginLeft:10 }}
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
              image:`${params.getValue(params.id, "urlImage")}`
              
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
      width: 160,
    },
  ];

  return (
    <>
     <Navbar/>
      <div className="wrap-forum">
        {/* <SidebarTeacher /> */}
        <div className="forum">
          <h3 style={{fontWeight:600,marginLeft:470}}>DIỄN ĐÀN THẢO LUẬN</h3>
          <img src={Forum}  style={{width:'400px',height:'400px',marginLeft:450,display:"block"}} />
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
        <div style={{ height: 400, marginTop: 20, width: "90%" }}>
          <DataGrid
            rows={forum}
            columns={columns}
            pageSize={5}
            onSelectionModelChange={(item) => {
              setIdTest(item);
            }}
          />
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default Index;
