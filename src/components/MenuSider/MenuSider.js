import React, {useState} from "react";
import "./MenuSider.scss";
import { useLocation,useNavigate } from "react-router-dom";

import { UserOutlined,AppstoreOutlined } from "@ant-design/icons";
import {Menu,Layout, Collapse} from "antd";
import Sider from "antd/es/layout/Sider";



export const MenuSider = (props) =>{
    const {Sider} = Layout;
    const location =useLocation();
    const navigate = useNavigate();

    const menuItemns=[
        {
            key:"admin/users",
            icon: <UserOutlined/>,
            label: <span className="navbar-text">Users</span>,
        },
        {
            key:"/admin/productos",
            icon:<AppstoreOutlined/>,
            label:<spam className="navbar-text">Products</spam>,
        },
    ];
    const menuClick = (e) =>{
        const path = e.key;
        console.log("Di clic en el item del menu " + path );
        navigate(path);
    };

    return(
        <Sider className="menu-sider" collapsed={props.menuCollapsed}>
            <Menu
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            onClick={menuClick}
            items={menuItemns}
            />
        </Sider>
    );
};