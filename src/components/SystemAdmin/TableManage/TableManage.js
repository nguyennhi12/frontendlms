import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import callApi from "../../../api/apiService";
import SuaTaiKhoan from "../SuaTaiKhoan/SuaTaiKhoan";
import Notification from "../../Notification/Notification";
export default function TableManage() {
  const columns = [
    { field: "id", headerName: "ID", width: 95, hide: true },
    {
      field: "userName",
      headerName: "Username",
      width: 150,
      editable: false,
    },
    {
      field: "displayName",
      headerName: "Name",
      width: 150,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      type: "date",
      width: 150,
      editable: false,
    },
    {
      field: "role",
      headerName: "Role",
      width: 150,
      editable: false,
    },
    {
      field: "phoneNumber",
      headerName: "Phone",
      width: 150,
      editable: false,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      editable: false,
    },
    {
      field: "lockoutEnd",
      headerName: "Date Lock",
      width: 150,
      editable: false,
    },
  ];

  const [users, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [idUser, setIdUser] = useState();
  const [isOpenEditTeacher, setOpenEditTeacher] = useState(false);
  const rows = users;
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const togglePopupEditTeacher = () => {
    setOpenEditTeacher(!isOpenEditTeacher);
  };

  const handleDeleteUser = () => {
    console.log(idUser);
    callApi(`Authentication/LockUser?idUser=${idUser}&day=10`, "POST")
      .then((res) => {
        console.log(res);
        setNotify({
          isOpen: true,
          message: "Lock user thành công",
          type: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    callApi(
      `Authentication/getAllUser?searchRole=&searchName=&pageSize=20&pageNumber=1`,
      "GET"
    )
      .then((res) => {
        console.log(res);
        if (res.data.statusCode == 200) {
          setUser(res.data.data);
        } else {
          alert("Fail");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <Button
          variant="contained"
          size="small"
          style={{ marginLeft: 16, backgroundColor: "#fed813" }}
          onClick={togglePopupEditTeacher}
        >
          Chỉnh sửa
        </Button>

        <Button
          variant="contained"
          size="small"
          onClick={handleDeleteUser}
          style={{ marginLeft: 16, backgroundColor: "red", color: "#fff" }}
        >
          Lock User
        </Button>
      </div>
      <div style={{ height: 400, width: "100%", marginTop: 20 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          onSelectionModelChange={(item) => {
            setIdUser(item);
            const selectedIDs = item;
            const selectedRowData = rows.filter(
              (row) => row.id === item.toString()
            );
            // get data in row select
            setData(selectedRowData[0].userName);
          }}
        />
      </div>
      {isOpenEditTeacher && (
        <SuaTaiKhoan
          handleClose={togglePopupEditTeacher}
          idUser={idUser}
          username={data}
        />
      )}
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}
