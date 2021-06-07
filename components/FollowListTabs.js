import { Button, Tabs } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { EmptyItems } from "./EmptyItems";
import { ModalCreateList } from "./ModalCreateList";
import { SearchExpContainer } from "./SearchExpContainer";
import { useState } from "react";

const { TabPane } = Tabs;
let newTabIndex = 0;

const paneList = [
  { title: "Mi lista 1", content: <SearchExpContainer />, key: "1" },
  // { title: "Mi lista 2", content: <EmptyItems />, key: "2" },
];

export function FollowListTabs() {
  const [activeKey, setActiveKey] = useState(paneList[0].key);
  const [panes, setPane] = useState(paneList);

  const handleOnChange = (key) => {
    setActiveKey(key);
  };

  const handleAddPane = ({ title }) => {
    const activeKey = `newTab${newTabIndex++}`;
    setActiveKey(activeKey);
    setPane([...panes, { title, content: <EmptyItems />, key: activeKey }]);
  };

  return (
    <Tabs
      hideAdd
      activeKey={activeKey}
      onChange={handleOnChange}
      tabBarExtraContent={<ModalCreateList handleAddPane={handleAddPane} />}
    >
      {panes.map((pane) => (
        <TabPane tab={pane.title} key={pane.key}>
          {pane.content}
        </TabPane>
      ))}
    </Tabs>
  );
}
