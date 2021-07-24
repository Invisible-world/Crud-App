
import React ,{ useState }from 'react' 
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './Main.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  AddEmployee,
  EditEmployee,
  EmployeeList,
  Dashboard,
  Setting
  
 } from "../index";
const { Header, Sider, Content } = Layout;

  const styleSpant={
    color:'white',
    fontSize:'20px',
    marginLeft:'6px'
  }  

 const Main = () => {  
  
  const [collapsed,setCollapsed]=useState(false)
  

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  
    return (
      <Router>
      <Layout style={{height:'100vh'}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className='logo' ><span className={collapsed ? 'styleSpant':'styleSpan'}>EMS</span></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to='/'>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to='/employeelist'>Employee List</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to='/addemployee'> Add Employee</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
            <Link to='/setting'>Setting</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: {trigger},
              onClick: toggle,
            })}
          </Header>
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/employeelist" component={EmployeeList} />
            <Route exact path="/addemployee" component={AddEmployee} />
            <Route exact path="/setting" component={Setting} /> 
          </Content>
        </Layout>
      </Layout>
      </Router>
    );
  }

const trigger ={
  padding: '0 24px',
  fontSize: '18px',
  lineHeight: '64px',
  cursor: 'pointer',
  transition: 'color 0.3s',
}
export default Main