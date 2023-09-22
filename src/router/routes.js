import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';
import Shopping from '../components/Shopping';
import Basket from '../page/Basket';
const router = [
    { path: '/', element: <Home /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/services', element: <Services /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/shopping', element: <Shopping />, },
    {path:'/basket', element:<Basket/>}
];
export default router;