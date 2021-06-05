import Link from "next/link";
import Head from "next/head";
import { Layout, Menu, Breadcrumb, PageHeader } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  FolderOpenOutlined,
  EyeOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export function MainLayout({ children, title = "This is the default title" }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<FolderOpenOutlined />} title="Expedientes">
            <Menu.Item icon={<EyeOutlined />} key="1">
              Seguimiento
            </Menu.Item>
            <Menu.Item icon={<FlagOutlined />} key="2">
              Movimientos
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content style={{ margin: "0 16px" }}>
          <PageHeader
            onBack={() => null}
            title="Expedientes"
            subTitle="Seguimiento"
          />
          <div style={{ padding: 24, height: "auto" }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Eby GDE © 2021 Creado por Marcelo Baez
        </Footer>
      </Layout>
      <style jsx>
        {`
          .logo {
            height: 32px;
            margin: 16px;
            background: rgba(255, 255, 255, 0.3);
          }

          .site-layout-background {
            background: #fff;
          }

          [data-theme="dark"] .site-layout .site-layout-background {
            background: #141414;
          }
        `}
      </style>
    </Layout>
  );
}
