import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import callApi from "../../../api/apiService";
import Notification from "../../Notification/Notification";
import DescriptionIcon from "@material-ui/icons/Description";
import { Link } from "react-router-dom";
import SidebarTeacher from "../SidebarTeacher/SidebarTeacher";
import { useLocation } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
export default function DanhSachBaiKT() {
  const location = useLocation();
  const history = useHistory();
  const historyback = useHistory()
  const idCourse = location.state;

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 95,
      hide: true,
    },
    {
      field: "xem",
      headerName: "Xem danh sách nộp",
      width: 220,
      editable: false,
      renderCell: (params) => (
        // <Link href={`${params.getValue(params.id,'id')}`}>
        //     {`${params.getValue(params.id,'id')}`}
        // </Link>
        <Link
          to={{
            pathname: `/danhsachbailam`,
            state: {
              idAss: `${params.getValue(params.id, "id")}`,
              idCourse: idCourse,
            },
          }}
          style={{ textDecoration: "none",marginLeft:30 }}
        >
          <Button
            variant="contained"
            color="primary"
            // onClick={() => {
            //   history.push("/teacher/danhsachbailam", {
            //     from: "DanhSachBaiKT",
            //   });
            // }}
          >
            Xem
          </Button>
        </Link>
      ),
    },
    {
      field: "title",
      headerName: "Title",
      width: 200,
    },

    {
      field: "start",
      headerName: "Bắt đầu",
      type: "date",
      width: 200,
      editable: false,
    },
    {
      field: "finish",
      headerName: "Kết thúc",
      type: "datetime",
      width: 200,
      editable: false,
    },
    {
      field: "urlFile",
      headerName: "Đề bài",
      width: 130,
      editable: false,
      renderCell: (params) => (
        <a href={`${params.value}`}>
          <DescriptionIcon />
        </a>
      ),
    },
  ];

  const [test, setTest] = useState([]);
  const [idTest, setIdTest] = useState([]);

  const [isOpenEditTeacher, setOpenEditTeacher] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  {
    console.log(test);
  }

  useEffect(() => {
    callApi(
      `CreateAssigments/getAssigmentsByCourse?idCourse=${idCourse}&pageNumber=1&pageSize=8`,
      "GET"
    )
      .then((res) => {
        console.log(res);
        setTest(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <SidebarTeacher />
      <span
       onClick={() => {
        historyback.goBack();
        }}
        style={{
          marginLeft: 250,
          marginTop: 10,
          display: "block",
          textDecoration: "none",
          color:'#98a0a5',
          cursor:'pointer',
          width:150,
          height:60,
          padding:10
        }}
      >
        <ArrowBackIosIcon style={{fontSize:'20px'}}/>
        Quay lại
      </span>
      <h4 style={{ marginLeft: 300, marginTop: 50 }}>
        Danh sách các bài kiểm tra
      </h4>
      <div style={{ height: 400, marginTop: 20, marginLeft: 300 }}>
        <DataGrid
          rows={test}
          columns={columns}
          pageSize={5}
          onSelectionModelChange={(item) => {
            setIdTest(item);
          }}
          style={{ width: '80%' }}
        />
      </div>

      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}
