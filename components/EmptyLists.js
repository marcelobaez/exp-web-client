import { Empty, Button } from "antd";

export function EmptyLists() {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={<span>Aún no tiene listas</span>}
    >
      <Button type="primary">Crear una lista</Button>
    </Empty>
  );
}
