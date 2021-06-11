import { Row, Col, Divider, Form, Empty, message } from "antd";
import { SearchExpForm } from "./SearchExpForm";
import { TableResults } from "./TableResults";
import { TableMov } from "./TableMov";
import { EmptyItems } from "./EmptyItems";
import { NotificationMessage } from "./NotificationMessage";
import { useState, useEffect } from "react";

export function SearchExpContainer() {
  const [searchData, setSearchData] = useState([]);
  const [data, setData] = useState([]);
  const [showEmpty, setShowEmpty] = useState(false);
  const [success, setSuccess] = useState(false);
  const [refetch, setRefetch] = useState(0);
  const [showTableResults, setShowTableResults] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/items");
      const json = await res.json();
      setData(json.items);
      setShowSearch(false);
    };

    getData();
  }, [refetch]);

  const handleSubmit = async (values) => {
    const { year, number } = values;

    const res = await fetch(`/api/expedientes?year=${year}&number=${number}`);
    const { expedientes } = await res.json();

    setSearchData(expedientes);
    setShowTableResults(expedientes.length);
    setShowEmpty(!expedientes.length);
  };

  const handleReset = () => {
    setSearchData([]);
    setShowTableResults(false);
    setShowEmpty(false);
  };

  const handleShowSearch = () => {
    setShowSearch(false);
  };

  const handleAdd = async (id) => {
    await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify({ id }),
    });

    message.success("Agregado a la lista");
    setRefetch(refetch + 1);
    setSuccess(true);
    setSearchData([]);
    setShowTableResults(false);
    setShowEmpty(false);
  };

  const handleRemove = async (id) => {
    await fetch("/api/items", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    message.success("Quitado a la lista");
    setRefetch(refetch + 1);
    setSuccess(true);
    setSearchData([]);
    setShowTableResults(false);
    setShowEmpty(false);
  };

  return (
    <Row gutter={16}>
      <Col span={24}>
        {data.length > 0 && (
          <TableMov data={data} handleRemove={handleRemove} />
        )}
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
        {showTableResults ? (
          <TableResults data={searchData} handleAdd={handleAdd} />
        ) : showEmpty ? (
          <Empty description="No se encontraron resultados. Verifique los valores ingresados" />
        ) : null}
      </Col>
    </Row>
  );
}
