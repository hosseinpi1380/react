// import React from 'react';
// import Book from './book';
// export default class MainBook extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             author: '', title: '', year: '', books: []
//         }
//     }
// titleHandler(e) {
//     let valueEnterd = e.target.value;
//     this.setState({
//         title: valueEnterd
//     })
// }
// authorHandler(e) {
//     let valueEnterd = e.target.value;
//     this.setState({
//         author: valueEnterd
//     })
// }
// yearHandler(e) {
//     let valueEnterd = e.target.value;
//     this.setState({
//         year: valueEnterd
//     })
// }
// submitHandler(e) {
//     e.preventDefault();
//     console.log(e);
//     let stateValue = this.state;
//     if (stateValue.author.length > 0 && stateValue.title.length > 0 && stateValue.year.length > 0) {
//         this.setState((prev) => {
//             return {
//                 books: [...prev.books, { title: stateValue.title, author: stateValue.author, year: stateValue.year }],
//                 title: '', author: '', year: ''
//             }
//         })
//     }
// }
//     render() {
//         return (
//             <>
//                 <div className="book flex flex-col w-[500px] shadow-md p-4 rounded-sm">
//                     <h1 className='text-black uppercase font-mono font-semibold text-center '>sabzlearn book list</h1>
//                     <form className='flex flex-col uppercase' onSubmit={(event) => this.submitHandler(event)}>
//                         <div className='flex flex-col w-full'>
//                             <label htmlFor="">title</label>
//                             <input value={this.state.title} onChange={(event) => this.titleHandler(event,)} type="text" className='book-input bg-slate-100 outline-none active:outline-none px-2 py-4' placeholder='title' />
//                         </div>
//                         <div className='flex flex-col w-full'>
//                             <label htmlFor="">author</label>
//                             <input value={this.state.author} onChange={(event) => this.authorHandler(event)} type="text" className='book-input bg-slate-100 outline-none active:outline-none px-2 py-4' placeholder='title' />
//                         </div>
//                         <div className='flex flex-col w-full'>
//                             <label htmlFor="">year</label>
//                             <input value={this.state.year} onChange={(event) => this.yearHandler(event)} type="text" className='book-input bg-slate-100 outline-none active:outline-none px-2 py-4' placeholder='year' />
//                         </div>
//                         <input type="submit" value="submit" className='w-full  bg-yellow-500 uppercase py-2 cursor-pointer' />
//                     </form>
//                     <table className='text-center table-fixed border-collapse'>
//                         <thead>
//                             <tr className='bg-slate-600 text-white uppercase'>
//                                 <td>title</td>
//                                 <td>author</td>
//                                 <td>year</td>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.state.books.map(book => <Book {...book} />)}
//                         </tbody>
//                     </table>
//                 </div>
//             </>
//         )
//     }
// }


import React, { useState } from 'react'
import Book from './Book';
export default function MainBook() {
    let [author, setAuthor] = useState('');
    let [title, setTitle] = useState('');
    let [year, setYear] = useState('');
    let [books, setBooks] = useState([])
    const titleHandler = (e) => {
        let valueEnterd = e.target.value;
        setTitle(
            title = valueEnterd
        )
    }
    const authorHandler = (e) => {
        let valueEnterd = e.target.value;
        setAuthor(author = valueEnterd)
    }
    const yearHandler = (e) => {
        let valueEnterd = e.target.value;
        setYear(year = valueEnterd)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (author.length > 0 && title.length > 0 && year.length > 0) {
            setBooks(prev => books = [...prev, { 'title': title, 'author': author, 'year': year }])
            setAuthor('');
            setTitle('');
            setYear('');
        }
    }
    return (
        <>
            <div className="book flex flex-col w-[500px] shadow-md p-4 rounded-sm">
                <h1 className='text-black uppercase font-mono font-semibold text-center '>sabzlearn book list</h1>
                <form className='flex flex-col uppercase' onSubmit={(event) => submitHandler(event)}>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">title</label>
                        <input value={title} onChange={(event) => titleHandler(event)} type="text" className='book-input bg-slate-100 outline-none active:outline-none px-2 py-4' placeholder='title' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">author</label>
                        <input value={author} onChange={(event) => authorHandler(event)} type="text" className='book-input bg-slate-100 outline-none active:outline-none px-2 py-4' placeholder='title' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">year</label>
                        <input value={year} onChange={(event) => yearHandler(event)} type="text" className='book-input bg-slate-100 outline-none active:outline-none px-2 py-4' placeholder='year' />
                    </div>
                    <input type="submit" value="submit" className='w-full  bg-yellow-500 uppercase py-2 cursor-pointer' />
                </form>
                <table className='text-center table-fixed border-collapse'>
                    <thead>
                        <tr className='bg-slate-600 text-white uppercase'>
                            <td>title</td>
                            <td>author</td>
                            <td>year</td>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => <Book {...book} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}



