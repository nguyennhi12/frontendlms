import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import callApi from "../../../api/apiService";
import Notification from "../../Notification/Notification";
import DescriptionIcon from "@material-ui/icons/Description";
import Link from "@material-ui/core/Link";
import SidebarTeacher from "../SidebarTeacher/SidebarTeacher";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { SpaceBarRounded } from "@material-ui/icons";
export default function DanhSachBaiLam() {
  const location = useLocation();
  const history = useHistory();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 95,
      hide: true,
    },
    {
      field: "urlAvatar",
      headerName: "Avatar",
      width: 130,
      renderCell: (params) => (
        <img
          src={`${params.row?.student.urlAvatar}`}
          style={{ width: "40px", height: "40px" }}
        />
      ),
    },
    {
      field: "displayName",
      headerName: "Tên học viên",
      width: 200,
      valueFormatter: (params) => `${params.row?.student.displayName}`,
    },
    {
      field: "score",
      headerName: "Điểm",
      width: 120,
    },
    {
      field: "urlAssignment",
      headerName: "Bài làm",
      width: 200,
      renderCell: (params) => (
       
        <Link href={`${params.row?.urlAssignment}`}>
          <DescriptionIcon />
       
        </Link>
      ),
    },
  ];

  var [Data, setData] = useState([]);
  const idCourse = location.state.idCourse;
  const [idTest, setIdTest] = useState(location.state.idAss);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  {
    console.log(Data.length);
  }

  useEffect(() => {
    callApi(
      `StudentScores/getStudentScoreOfCourses?idCourse=${idCourse}&idAssignment=${idTest}&pageNumber=1&pageSize=3`,
      "GET"
    )
      .then((res) => {
        // console.log(res.data.data)
        console.log(res);
        setData(res.data.data);
        // for(let i =0;i<Data.length;i++){
        //     Data[i].push({id:i})
        // }
        // console.log('hello')
        console.log(Data);
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
        history.goBack();
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
      <h4 style={{ marginLeft: 300, marginTop: 10 }}>
        Danh sách bài làm của học viên trong khóa
      </h4>

      <div style={{ height: 400, marginTop: 20, marginLeft: 300 }}>
        <DataGrid
          id={Data.idCourse}
          rows={Data}
          columns={columns}
          pageSize={5}
          onSelectionModelChange={(item) => {
            setIdTest(item);
          }}
          style={{ width: 800 }}
        />
      </div>

      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}
