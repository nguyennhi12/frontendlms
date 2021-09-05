import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 95 },
  {
    field: 'userName',
    headerName: 'Username',
    width: 150,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'createDate',
    headerName: 'Create Date',
    type: 'date',
    width: 150,
    editable: false,
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 150,
    editable: false,
  },
  {
    field: 'action',
    headerName: 'Action',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: () => (
      
      <strong>
      
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
       
        >

          Chỉnh sửa
        </Button>
        
      </strong>)
  
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, 'Name') || ''} ${
    //     params.getValue(params.id, 'userName') || ''
    //   }`,
  },
  {
    field: 'actionUpdate',
    headerName: 'Action',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: () => (
      
      <strong>
      
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
       
        >

          Xóa
        </Button>
        
      </strong>)
  
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, 'Name') || ''} ${
    //     params.getValue(params.id, 'userName') || ''
    //   }`,
  },
];

const rows = [
  { id: 1, userName: 'Snow', name: 'Jon',createDate:'01-02-2021',role:'Teacher', },
  { id: 2, userName: 'Lannister', name: 'Cersei',createDate:'01-02-2021',role:'Class Admin' },
  { id: 3, userName: 'Lannister', name: 'Jaime',createDate:'01-01-2021',  },
  { id: 4, userName: 'Stark', name: 'Arya',createDate:'01-02-2021',  },
  { id: 5, userName: 'Targaryen', name: 'Daenerys',createDate:'01-02-2021', },
  { id: 6, userName: 'Melisandre', name: null,createDate:'01-02-2021',  },
  { id: 7, userName: 'Clifford', name: 'Ferrara',createDate:'01-02-2021',  },
  { id: 8, userName: 'Frances',name: 'Rossini',createDate:'01-02-2021',  },
  { id: 9, userName: 'Roxie', name: 'Harvey',createDate:'01-02-2021',  },
];



export default function TableManage() {
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
     
   
      />
    </div>
  );
}
