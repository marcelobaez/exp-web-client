import { Row, Col, Divider, Form, Empty } from "antd";
import { SearchExpForm } from "./SearchExpForm";
import { TableResults } from "./TableResults";
import { EmptyItems } from "./EmptyItems";
import { useState, useEffect } from "react";

export function SearchExpContainer() {
  const [data, setData] = useState([]);
  const [showEmpty, setShowEmpty] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showSearch, setShowSearch] = useState(true);

  const handleSubmit = async (values) => {
    const { year, number } = values;

    const res = await fetch(`/api/expedientes?year=${year}&number=${number}`);
    const { expedientes } = await res.json();

    setData(expedientes);
    setShowTable(expedientes.length);
    setShowEmpty(!expedientes.length);
  };

  const handleReset = () => {
    setData([]);
    setShowTable(false);
    setShowTable(false);
    setShowEmpty(false);
  };

  const handleShowSearch = () => {
    setShowSearch(false);
  };

  return (
    <Row gutter={16}>
      <Col span={24}>
        {showSearch ? (
          <EmptyItems handleShowSearch={handleShowSearch} />
        ) : (
          <SearchExpForm
            handleSubmit={handleSubmit}
            handleReset={handleReset}
          />
        )}

        <Divider />
      </Col>
      <Col span={24}>
        {showTable ? (
          <TableResults data={data} />
        ) : showEmpty ? (
          <Empty description="No se encontraron resultados. Verifique los valores ingresados" />
        ) : null}
      </Col>
    </Row>
  );
}
