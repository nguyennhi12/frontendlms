import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import callApi from "../../../../api/apiService";
import DescriptionIcon from "@material-ui/icons/Description";
import "./document.css";
import SidebarTeacher from "../../SidebarTeacher/SidebarTeacher";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Button } from "@material-ui/core";
import { Form } from "react-bootstrap";
import SaveIcon from "@material-ui/icons/Save";
import ConfirmDialog from "../../../Notification/ConfirmDialog";
import Notification from "../../../Notification/Notification";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
function DocumentRoadmap() {
  const location = useLocation();
  const history = useHistory();
  const [roadmapContent, setRoadmapContent] = useState();
  const [document, setDocument] = useState([]);
  const { idRoadmapContent } = useParams();
  // Thêm
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [urlDocument, setUrlDocument] = useState();
  const [openAdd, setOpenAdd] = useState(false);

  const [idUpdate, setIdUpdate] = useState([]);
  const [openUpdate, setOpenUpdateForm] = useState(false);
  const [titleUpdate, setTitleUpdate] = useState();
  const [contentUpdate, setContentUpdate] = useState();
  const [urlUpdate, setUrlUpdate] = useState();

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
  useEffect(() => {
    callApi(
      `RoadMapContents/getRoadMapContent?id=${idRoadmapContent}`,
      "GET"
    ).then((res) => {
      // console.log(res.data.data)
      setRoadmapContent(res.data.data);
      setDocument(res.data.data.documents);
    });
  }, []);

  // Data

  const buttonDeleteDocument = async (idDocument) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    callApi(`Documents/deleteDocuments/${idDocument}`, "DELETE")
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

  const buttonAddDocument = (e) => {
    e.preventDefault();

    var formdata = new FormData();
    formdata.append("idRoadmapcontent", idRoadmapContent);
    formdata.append("Title", title);
    formdata.append("Content", content);
    formdata.append("URLDocument", urlDocument);

    callApi(`Documents/createDocuments`, "POST", formdata)
      .then((res) => {
        console.log(res);
        setNotify({
          isOpen: true,
          message: "Tạo thành công tài liệu",
          type: "success",
        });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showupdateDocument = (idDocument) => {
    callApi(`Documents/getDocument/${idDocument}`, "GET")
      .then((res) => {
        console.log(res);
        setTitleUpdate(res.data.data.title);
        setContentUpdate(res.data.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveUpdateDocument = (e) => {
    e.preventDefault();
    const id = idUpdate.toString();
    var formdata = new FormData();
  
    formdata.append("Title", titleUpdate);
    formdata.append("Content", contentUpdate);
    formdata.append("URLDocument", urlUpdate);
   
    callApi(`Documents/updateDocuments/${id}`, "PUT", formdata)
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
          if(err.response.data.message==="Update Failed Document")
          {
            setNotify({
                isOpen: true,
                message: "Bạn không có quyền sửa tài liệu này",
                type: "error",
              });
          }
          
          if(err.response.status===400)
          {
            setNotify({
                isOpen: true,
                message: "Bạn điền thiếu thông tin",
                type: "error",
              });
          }

        console.log(err);
      });
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 95,
      hide: true,
    },

    {
      field: "title",
      headerName: "Title",
      width: 200,
    },

    {
      field: "content",
      headerName: "Nội dung",
      type: "datetime",
      width: 200,
      editable: false,
    },
    {
      field: "urlDocument",
      headerName: "Tài liệu",
      width: 130,
      editable: false,
      renderCell: (params) => (
        <a href={`${params.value}`}>
          <DescriptionIcon />
        </a>
      ),
    },
    {
      field: "delete",
      headerName: "Xóa",
      width: 150,

      renderCell: (params) => (
        <Button
          variant="contained"
          style={{ backgroundColor: "red", color: "#fff" }}
          onClick={() => {
            setConfirmDialog({
              isOpen: true,
              title: "Bạn muốn xóa tài liệu này ?",
              subtitle: "Bạn không thể hoàn tác",
              confirm: () => {
                buttonDeleteDocument(params.getValue(params.id, "id"));
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
      width: 150,

      renderCell: (params) => (
        <Button
          variant="contained"
          style={{ backgroundColor: "#fed813", color: "#fff" }}
          onClick={() => {
            setOpenUpdateForm(true);
            showupdateDocument(params.getValue(params.id, "id"));
          }}
        >
          Chỉnh sửa
        </Button>
      ),
    },
  ];
  return (
    <>
      <div>
        <SidebarTeacher />
        <div style={{ height: 400, marginTop: 40, marginLeft: 300 }}>
          <span
            onClick={() => {
              history.goBack();
            }}
            style={{
              marginLeft: 0,
              marginTop: 10,
              display: "block",
              textDecoration: "none",
              color: "#98a0a5",
              cursor: "pointer",
              width: 150,
              height: 60,
              padding: 10,
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: "20px" }} />
            Quay lại
          </span>

          <Button
            variant="contained"
            style={{ color: "#fff", backgroundColor: "#055031" }}
            onClick={() => {
              setOpenAdd(!openAdd);
            }}
            startIcon={<CloudUploadIcon />}
          >
            Thêm tài liệu
          </Button>

          {openAdd && (
            <Form style={{ marginTop: 30, width: "80%" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Chủ đề</Form.Label>
                <Form.Control
                  placeholder="Tên chủ đề"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Nội dung tài liệu</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Label>Chọn tài liệu</Form.Label>
              <input
                type="file"
                onChange={(e) => {
                  setUrlDocument(e.target.files[0]);
                }}
                style={{ display: "block" }}
              />

              <Button
                variant="contained"
                style={{ color: "#fff", backgroundColor: "#055031" }}
                size="large"
                onClick={buttonAddDocument}
                startIcon={<SaveIcon />}
              >
                Lưu
              </Button>
            </Form>
          )}

          <div style={{ height: 400, marginTop: 10, width: "80%" }}>
            <DataGrid
              rows={document}
              columns={columns}
              pageSize={5}
              onSelectionModelChange={(item) => {
                setIdUpdate(item);
              }}
            />
          </div>
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      {openUpdate && (
        <div className="wrap_updateform">
          <Form
            style={{ margin: "100px auto", width: "50%" }}
            className="form-update"
          >
            <span
              className="close-button-update"
              onClick={() => {
                setOpenUpdateForm(false);
              }}
            >
              x
            </span>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Chủ đề</Form.Label>
              <Form.Control
                placeholder="Tên chủ đề"
                value={titleUpdate}
                onChange={(e) => {
                  setTitleUpdate(e.target.value);
                }}
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
                onChange={(e) => {
                  setContentUpdate(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Label>Thêm chủ đề</Form.Label>
            <input
              type="file"
              onChange={(e) => {
                setUrlUpdate(e.target.files[0]);
              }}
              style={{ display: "block" }}
            />

            <Button
              variant="contained"
              style={{ color: "#fff", backgroundColor: "#055031" }}
              size="large"
              onClick={saveUpdateDocument}
              startIcon={<SaveIcon />}
            >
              Lưu
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default DocumentRoadmap;
