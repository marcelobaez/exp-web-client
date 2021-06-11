import {
  DeleteOutlined,
  DownOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import {
  Table,
  Typography,
  Button,
  Tooltip,
  Tag,
  Badge,
  Space,
  Dropdown,
  Menu,
} from "antd";
import { formatDistanceToNow, parse } from "date-fns";
import esLocale from "date-fns/locale/es";
import { ModalSetDate } from "./ModalSetDate";
import { useState } from "react";

const { Text, Title } = Typography;

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

const expandedRowRender = () => {
  const columns = [
    { title: "Fecha", dataIndex: "date", key: "date" },
    { title: "Motivo", dataIndex: "reason", key: "reason" },
    { title: "Emisor", dataIndex: "from", key: "from" },
    { title: "Destino", dataIndex: "to", key: "to" },
    {
      title: "Estado",
      key: "state",
      dataIndex: "state",
      render: (text) => (
        <span>
          <Badge status="success" />
          {text}
        </span>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      date: "27/01/2021",
      reason: "Motivo del pase",
      from: "USUARIO",
      to: "OTRO_USUARIO",
      state: "Tramitación",
    });
  }
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export function TableMov({ data, handleRemove }) {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };

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
      title: "Estado",
      key: "estado",
      dataIndex: "estado",
      width: 150,
      render: (text) => (
        <span>
          <Badge status="success" />
          {text}
        </span>
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
        <Space>
          <Tooltip title="Establecer tiempo de trámite">
            <Button
              size="small"
              icon={
                <CalendarOutlined
                  onClick={() => {
                    setVisible(true);
                  }}
                />
              }
            ></Button>
          </Tooltip>
          <Tooltip title="Quitar de la lista">
            <Button
              onClick={() => handleRemove(record.id)}
              ghost
              danger
              size="small"
              icon={<DeleteOutlined />}
            ></Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        rowKey="id"
        dataSource={data}
        size="small"
        scroll={{ x: 1100 }}
        expandable={{ expandedRowRender, expandRowByClick: true }}
        // title={() => <Title level={5}>Movimientos</Title>}
      />
      <ModalSetDate visible={visible} onCancel={onCancel} onCreate={onCreate} />
    </>
  );
}
