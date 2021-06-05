import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { ExpTable } from "./ExpTable";
import { EmptyLists } from "./EmptyLists";
import { FollowListTabs } from "./FollowListTabs";

const { Title } = Typography;

export function SearchContainer() {
  return (
    <Row gutter={[8, 8]} justify="space-around">
      <Col span={24}>
        <Title level={4}>Listas de seguimiento</Title>
      </Col>
      <Col span={24}>
        <Card bordered={false} style={{ width: "100%", minHeight: "300px" }}>
          <FollowListTabs />
        </Card>
        {/* <EmptyResults />
        <ExpTable /> */}
      </Col>
    </Row>
  );
}
