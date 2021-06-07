import { Table, Tag, Space } from "antd";
import { columns } from "../utils/index";

export function TableResults({ data }) {
  return (
    <Table pagination={false} rowKey="id" columns={columns} dataSource={data} />
  );
}
