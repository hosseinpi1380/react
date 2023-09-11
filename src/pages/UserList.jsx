import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { usersInfo } from '../Data';
const UserList = () => {
  const [users, setUsers] = useState(usersInfo);
  const deleteUser=(id)=>{
    { setUsers(prev => prev.filter(el => el.id !== id)) }
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'FirstName', width: 150 },
    {
      field: 'avatar', headerName: 'Avatar', width: 150,
      renderCell: (params) => {
        return (
          <img src={params.row.avatar} alt={params.row.avatar} />
        )
      }
    },
    { field: 'status', headerName: 'Status', width: 90 },
    { field: 'transaction', headerName: 'Transactions', width: 90 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'action', headerName: 'Action', width: 170,
      renderCell: (params) => {
        return (
          <div className='flex justify-between'>
            <button className='bg-blue-500 text-white rounded-full p-2'>edit</button>
            <button className='bg-red-500 text-white rounded-full p-2' onClick={() =>deleteUser(params.row.id)}>delete</button>
          </div>
        )
      }
    }
  ];
  return (
    <>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[2]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  )
}
export default UserList;