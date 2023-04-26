import React , {useState} from "react";
import { Route, Routes , useNavigate } from "react-router-dom";
import Dashboard from "../Component/Dashboard";
import Download from "../Component/Download";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


const Profile = () => {

    const items = [
        {
          label: 'Dashboard',
          key: 'Dashboard',
          id: 1
        },
        {
          label: 'Download',
          key: 'Download',
          id: 2
        },
    ];

    const navigate = useNavigate();

    const [current, setCurrent] = useState('/Profile');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(`${e.key}`);
    };

    const navStyle = {
      backgroundColor: 'whitesmoke',
      borderRadius: '5px'
    }

    return(
        <div>
            This is Profile
            <Menu onClick={onClick} style={navStyle} defaultSelectedKeys={current} selectedKeys={[current]} mode="horizontal" items={items}/>
            <Routes>
                <Route path="Download" element={<Download />}/>
                <Route path="Dashboard" element={<Dashboard />}/>
            </Routes>
        </div>
    )
}


export default Profile;