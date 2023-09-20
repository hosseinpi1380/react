import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs'
const router = [
    { path: '/', element: <Home /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/services', element: <Services /> },
    { path: '/contact-us', element: <ContactUs /> },
];
export default router;