import { Empty, Button } from "antd";

export function EmptyItems() {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={<span>Aún no agregó expedientes a su lista</span>}
    >
      <Button type="primary">Agregar expediente</Button>
    </Empty>
  );
}
