import { Table, Tag, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export function TableResults({ data, handleAdd }) {
  const columns = [
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
        <Button
          type="primary"
          onClick={() => handleAdd(record.id)}
          ghost
          icon={<PlusOutlined />}
        >
          Agregar
        </Button>
      ),
    },
  ];

  return (
    <Table pagination={false} rowKey="id" columns={columns} dataSource={data} />
  );
}
