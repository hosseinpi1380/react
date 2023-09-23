import Home from '../pages/Home';
import Products from '../pages/Products';
import Comments from '../pages/Comments';
import Users from '../pages/Users';
import Orders from '../pages/Orders';
import Discount from '../pages/Discout';
const route = [
    { path: '/', element: <Home /> },
    { path: '/products', element: <Products /> },
    { path: '/comments', element: <Comments /> },
    { path: '/users', element: <Users /> },
    { path: '/orders', element: <Orders /> },
    { path: '/discount', element: <Discount /> }
];

export default route