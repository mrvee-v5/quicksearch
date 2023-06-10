import React, { useEffect, useState } from "react";
import AppLayout from "./layout";
import AppHeaderComponent from "./components/header/AppHeaderComponent";
import AppDrawer from "./components/drawer/AppDrawer";
import AppTable from "./components/table/AppTable";
import { Col, Row } from "antd";

import { GET_ITEMS } from "./constants";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import EmptyComponent from "./components/empty";

const App: React.FC = () => {
  const [openDrawer, setDrawer] = useState(false);
  const { items, loading } = useAppSelector(({ storeData }) => storeData);
  const dispatch = useAppDispatch();
  const onSearch = (val: string) => {
    const data = val.split(",");
    if (data.length) {
      dispatch({
        type: GET_ITEMS,
        payload: {
          itemId: data,
        },
      });
    } else {
      dispatch({
        type: GET_ITEMS,
        payload: {
          itemId: [val],
        },
      });
    }
  };

  const handleFetchData = () => {
    dispatch({
      type: GET_ITEMS,
      payload: {},
    });
  };

  // useEffect(() => {
  //   const data = new Array(100).fill(0);
  //   const result = data.map((item, index) => ({
  //     orderID: `122362353${index + 2}`,
  //     itemId: `9733${index + 1}`,
  //     type: val[getRandom()],
  //     category: `fruit ${index}`,
  //     description: `awesome item ${index}`,
  //   }));
  //   console.log(JSON.stringify(result, null, 6));
  // }, []);

  return (
    <>
      <AppLayout
        header={
          <AppHeaderComponent
            onFilter={() => setDrawer(true)}
            onSearch={onSearch}
          />
        }
      >
        <Row justify={"center"}>
          <Col span={18}>
            {items.length ? (
              <AppTable data={items} loading={loading} />
            ) : (
              <EmptyComponent onClick={handleFetchData} loading={loading} />
            )}
          </Col>
        </Row>
      </AppLayout>
      <AppDrawer isVisible={openDrawer} onClose={() => setDrawer(false)} />
    </>
  );
};

export default App;
