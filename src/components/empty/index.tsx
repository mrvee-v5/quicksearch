import React from "react";
import { Button } from "antd";
import "./index.css";
const EmptyComponent: React.FC<{ onClick: () => void; loading: boolean }> = ({
  onClick,
  loading,
}) => (
  <>
    <div className="empty-container">
      <h3>What are you looking for?</h3>
      <h5>Get started by searching & filtering a few</h5>
      <Button
        type={"primary"}
        className={"btn"}
        onClick={onClick}
        loading={loading}
      >
        Fetch data
      </Button>
      <h5>or search for an item</h5>
    </div>
  </>
);

export default EmptyComponent;
