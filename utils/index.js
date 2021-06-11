import { Space, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const columns = [
  {
    title: "Codigo",
    dataIndex: "code",
    key: "code",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Descripción",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Estado",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Acciones",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary" ghost icon={<PlusOutlined />}>
          Agregar
        </Button>
      </Space>
    ),
  },
];
