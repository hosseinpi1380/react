import React, { useState, useEffect } from 'react'
import './index.css'
import Button from './components/Button'
import Product from './components/Product'
const App = () => {
  const [item, setItem] = useState(null);
  const [menuItems, setMenuItems] = useState('')
  const [filtered, setFiltered] = useState([])
  const [activeMenu, setActiveMenu] = useState('all');
  useEffect(() => {
    const fetchProduct = async () => {
      fetch('http://localhost:3002/data')
        .then(res => res.json())
        .then(data => {
          setItem(data)
          setMenuItems(['all', ...new Set(data.map(value => value.category))]);
        })
    }
    fetchProduct();
  }, [])
  const changeMenu = menu => {
    setActiveMenu(menu)
    if (menu == 'all') {
      setFiltered(item)
      return;
    }
    const newItems = item.filter(val => val.category == menu)
    setFiltered(newItems)
  }
  return (
    <>
      <div className='bg-gray-200  p-4 h-full flex flex-col items-center'>
        <div className='w-4/5 mx-auto'>
          <h1 className='text-center uppercase'>our menu</h1>
          <div className="container mt-10">
            {menuItems && <Button menu={menuItems} active={activeMenu} changeMenu={changeMenu}/>}
            <div className="products grid grid-cols-2 mt-14 my-2 px-3 max-sm:grid-cols-1
             overflow-hidden max-sm:p-0 max-sm:m-0">
              {filtered && <Product filtered={filtered} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App




