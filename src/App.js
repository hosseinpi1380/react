import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function App() {
  const [data, setData] = useState([])
  const [currentPage, setCurentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;
  const page = data.slice(indexOfFirstPage, indexOfLastPage)

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts')
      let data = await res.json();
      setData(data)
    }
    fetchData()
  }, [])
  const paginate = (pageNumber) => {
    setCurentPage(pageNumber)
  }
  return (
    <>
      <div className='container'>
        <table className="table w-screen">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">userId</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            {page.map(per => (<tr key={per.id}>
              <td>{per.id}</td>
              <td>{per.userId}</td>
              <td>{per.title}</td>
              <td>{per.body}</td>
            </tr>))}
          </tbody>
        </table>
        <Pagination dataPerPage={dataPerPage} totalData={data} pagination={paginate} />
      </div>
    </>
  )
}
