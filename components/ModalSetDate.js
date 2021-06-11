import React from "react";
import { Button, Modal, Form, Input, Radio, Select, InputNumber } from "antd";

const { Option } = Select;

export function ModalSetDate({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Establecer tiempo de duración del trámite"
      okText="Establecer"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="inline" name="form_in_modal">
        <Form.Item
          name="value"
          label="Valor"
          rules={[
            {
              required: true,
              message: "Por favor ingrese un valor",
            },
          ]}
        >
          <InputNumber min={0} max={365} />
        </Form.Item>
        <Form.Item name="period" label="Unidad">
          <Select placeholder="Seleccione la unidad de tiempo">
            <Option value="days">Dias</Option>
            <Option value="weeks">Semanas</Option>
            <Option value="months">Meses</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}
