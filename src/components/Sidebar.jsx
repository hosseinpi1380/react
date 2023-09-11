import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report } from '@mui/icons-material';
export default function SideBarCom() {
    return (
        <Sidebar>
            <Menu className='text-sm'>
                <MenuItem component={<Link to="/" />}><LineStyle />Home</MenuItem>
                <MenuItem disabled component={<Link to="/analytics" />}><Timeline />Analatics</MenuItem>
                <MenuItem disabled component={<Link to="/sales" />}><TrendingUp /> Sales</MenuItem>
                <MenuItem component={<Link to="/users" />}><PermIdentity />User</MenuItem>
                <MenuItem disabled component={<Link to="/NewUsers" />}><PermIdentity />NewUsers</MenuItem>
                <MenuItem component={<Link to="/products"/>}><Storefront />Products</MenuItem>
                <MenuItem disabled component={<Link to="/Product-Users" />}><AttachMoney />Transactions</MenuItem>
                <MenuItem disabled component={<Link to="/report" />}><BarChart />Reports</MenuItem>
                <MenuItem disabled component={<Link to="/mail" />}><MailOutline />Mail</MenuItem>
                <MenuItem disabled component={<Link to="/feedBack" />}><DynamicFeed />Feedback</MenuItem>
                <MenuItem disabled component={<Link to="/message" />}><ChatBubbleOutline />Message</MenuItem>
                <MenuItem disabled component={<Link to="/manage" />}><WorkOutline />Manage</MenuItem>
                <MenuItem disabled component={<Link to="/analytics" />}><BarChart />Analytics</MenuItem>
                <MenuItem disabled component={<Link to="/Reports" />}><Report />Reports</MenuItem>
            </Menu>
        </Sidebar>
    )
}
