import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
export default function SideBarCom(){
    return(
        <Sidebar>
            <Menu>
                <MenuItem component={<Link to="/" />}>Home</MenuItem>
                <MenuItem component={<Link to="/About" />}> About</MenuItem>
                <MenuItem component={<Link to="/e-commerce"/>}> E-commerce</MenuItem>
            </Menu>
        </Sidebar>
    )
}
