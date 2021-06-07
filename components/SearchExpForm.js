import React, { useState, useEffect } from "react";
import { Form, Input, InputNumber, Button, Radio, Typography } from "antd";
import { SearchOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    gutter: 8,
  },
};

export const SearchExpForm = ({ handleSubmit, handleReset }) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async (values) => {
    handleSubmit(values);
  };

  const onReset = () => {
    form.resetFields();
    handleReset();
  };

  return (
    <>
      <Title level={4}>Buscar expediente</Title>
      <Form
        layout="inline"
        onFinish={onFinish}
        form={form}
        initialValues={{
          year: 2021,
        }}
        requiredMark="optional"
      >
        <Form.Item
          tooltip={{
            title: "Solo año 2021",
            icon: <InfoCircleOutlined />,
          }}
          name="year"
          label="Año"
          rules={[{ required: true, message: "El año es obligatorio!" }]}
        >
          <InputNumber min={2019} max={2021} />
        </Form.Item>
        <Form.Item
          tooltip={{
            title: "Probar con: 108264, 108948, 111185",
            icon: <InfoCircleOutlined />,
          }}
          name="number"
          label="Número"
          rules={[{ required: true, message: "El número es obligatorio!" }]}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
            Buscar
          </Button>
        </Form.Item>
        <Form.Item>
          <Button htmlType="button" onClick={onReset}>
            Limpiar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
