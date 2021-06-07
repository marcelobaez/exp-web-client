import { Space } from "antd";

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
        <a>Agregar</a>
      </Space>
    ),
  },
];
