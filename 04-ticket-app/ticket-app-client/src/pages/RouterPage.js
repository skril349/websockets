import React, { useContext, useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Ingresar from './Ingresar';
import Cola from './Cola';
import CrearTicket from './CrearTicket';
import Escritorio from './Escritorio';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { UiContext } from '../context/UiContext';

const { Header, Sider, Content } = Layout;

const RouterPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {ocultarMenu} = useContext(UiContext)
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
       <Router>
         <Layout style={{ height: '100vh' }}>
            <Sider collapsedWidth="0" breakpoint='md' hidden={ocultarMenu}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: <Link to="/ingresar">Ingresar</Link>,
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: <Link to="/cola">Cola</Link>,
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: <Link to="/crear-tickets">Crear Tickets</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
               
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Routes>
                        <Route path='/ingresar' element={<Ingresar />} />
                        <Route path='/cola' element={<Cola />} />
                        <Route path='/crear-tickets' element={<CrearTicket />} />
                        <Route path='/escritorio' element={<Escritorio />} />
                        <Route path='*' element={<Navigate to="/ingresar" replace />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
       </Router>
    );
}

export default RouterPage;
