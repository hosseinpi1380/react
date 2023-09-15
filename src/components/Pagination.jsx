import React from 'react'
const Pagination = ({ dataPerPage, totalData, pagination }) => {
    let pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalData.length / dataPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <>
            <nav className='bg-white'>
                <ul className="pagination justify-content-center pagination-lg">
                    {pageNumber.map(el => (
                        <li className="page-item" >
                            <a className="page-link" href="#" onClick={() => pagination(el)}>{el}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Pagination