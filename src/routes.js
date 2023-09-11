import Home from './pages/Home';
import About from './pages/About';
import ProductUsers from './pages/Products';
import NewUsers from './pages/NewUsers';
import UserList from './pages/UserList';
import Products from './pages/Products';
import Product from './pages/Product'
const routes=[
    {path:'/', element:<Home/>},
    {path:'/About', element:<About/>},
    {path:'/NewUsers', element:<NewUsers/>},
    {path:'/Product-Users', element:<ProductUsers/>},
    {path:'/users', element:<UserList/>},
    {path:'/products',element:<Products/>},
    {path:'/products/:id',element:<Product/>}
];
export default routes;