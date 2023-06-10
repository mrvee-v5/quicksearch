import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ItemProp } from "../../redux/item/types";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Order",

    dataIndex: "orderID",
  },

  {
    title: "Item",
    dataIndex: "itemId",
  },

  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
];

interface AppTableProps {
  data: ItemProp[];
  loading?: boolean;
}
const AppTable: React.FC<AppTableProps> = ({ data, loading }) => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        footer={null}
        loading={loading}
      />
    </div>
  );
};

export default AppTable;
