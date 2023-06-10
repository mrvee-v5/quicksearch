import { Space, Input, Form } from "antd";
import React from "react";
import "./index.css";
import { FunnelPlotOutlined } from "@ant-design/icons";
interface AppHeaderComponentProps {
  onSearch?: (val: string) => void;
  onFilter?: () => void;
}
const AppHeaderComponent: React.FC<AppHeaderComponentProps> = ({
  onSearch,
  onFilter,
}) => {
  return (
    <>
      <div className="header-container">
        <Space>
          <div>
            <Input.Search
              style={{ display: "block" }}
              placeholder="input search text"
              size="large"
              onSearch={onSearch}
            />
          </div>
          <FunnelPlotOutlined onClick={onFilter} />
        </Space>
      </div>
    </>
  );
};

export default AppHeaderComponent;
