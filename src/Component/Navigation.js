import React , {useState} from "react";
import {Link, NavLink, useParams , Navigate, useNavigate} from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


const Navigation = () => {

  const navigate = useNavigate();

    const items = [
        {
          label: 'Home',
          key: '/',
          id: 1
        },
        {
          label: 'Cart',
          key: 'Cart',
          id: 2
        },
        {
          label: 'Login',
          key: 'Login',
          id: 3
        },
        {
          label: 'Profile',
          key: 'Profile/*',
          id: 4
        }
    ]

    const params = useParams();

    const [current, setCurrent] = useState('/Cart');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate(`${e.key}`);
        console.log(params);
    };

    const navStyle = {
      backgroundColor: 'whiteSmoke',
      borderRadius: '5px'
    }

    return(
        <>
              <Menu onClick={onClick} style={navStyle} defaultSelectedKeys={current} selectedKeys={[current]} mode="horizontal" items={items}/>
        </>
    )

}


export default Navigation;