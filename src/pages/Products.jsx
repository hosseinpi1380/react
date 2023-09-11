import React, { useState } from 'react';
import { ProductsData } from '../Data';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
const Products = () => {
  const [users, setUsers] = useState(ProductsData);
  const navigate=useNavigate()
  const deleteUser = (id) => {
    setUsers(prev => prev.filter(el => el.id !== id))
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
    {
      field: 'action', headerName: 'Action', width: 170,
      renderCell: (params) => {
        return (
          <div className='flex justify-between'>
            <button className='bg-blue-500 text-white rounded-full p-2' onClick={()=>navigate(`/products/${params.row.id}`)}>edit</button>
            <button className='bg-red-500 text-white rounded-full p-2' onClick={() => deleteUser(params.row.id)}>delete</button>
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

export default Products