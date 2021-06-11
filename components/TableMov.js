import { DeleteOutlined } from "@ant-design/icons";
import { Table, Typography, Button, Tooltip, Tag } from "antd";
import { formatDistanceToNow, parse } from "date-fns";
import esLocale from "date-fns/locale/es";

const { Text, Title } = Typography;

export function TableMov({ data, handleRemove }) {
  const columns = [
    {
      title: "Codigo",
      dataIndex: "expediente",
      key: "expediente",
      width: 200,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Descripción",
      dataIndex: "descripcion",
      key: "descripcion",
      width: 320,
      render: (text) => (
        <Text style={{ width: 300 }} ellipsis={true}>
          {text}
        </Text>
      ),
    },
    {
      title: "Tiempo de vida",
      dataIndex: "fecha_operacion",
      key: "fecha_operacion",
      width: 160,
      render: (text, record) => (
        <Tag color="blue" style={{ textTransform: "capitalize" }}>
          {formatDistanceToNow(parse(text, "dd/MM/yyyy", new Date()), {
            locale: esLocale,
          })}
        </Tag>
      ),
    },
    {
      title: "Creado",
      dataIndex: "fecha_creacion",
      key: "fecha_creacion",
      width: 100,
    },
    {
      title: "Ultimo pase",
      dataIndex: "fecha_operacion",
      key: "fecha_operacion",
      width: 100,
    },
    {
      title: "En poder",
      dataIndex: "destinatario",
      key: "destinatario",
      width: 300,
      render: (text, record) => (
        <Text>{`${text} (${record.descripcion_reparticion_destin})`}</Text>
      ),
    },
    {
      title: "Acciones",
      key: "action",
      fixed: "right",
      width: 80,
      render: (text, record) => (
        <Tooltip title="Quitar de la lista">
          <Button
            onClick={() => handleRemove(record.id)}
            ghost
            danger
            size="small"
            icon={<DeleteOutlined />}
          ></Button>
        </Tooltip>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      rowKey="id"
      dataSource={data}
      size="small"
      scroll={{ x: 1100 }}
      // title={() => <Title level={5}>Movimientos</Title>}
    />
  );
}
