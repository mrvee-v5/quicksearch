import React, { useState } from "react";
import { Drawer, Input, Form, Checkbox, Space, Button } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { GET_ITEMS } from "../../constants";

const { TextArea } = Input;
interface AppDrawer {
  isVisible: boolean;
  onClose: () => void;
}

const AppDrawer: React.FC<AppDrawer> = ({ isVisible, onClose }) => {
  const [item, setItem] = useState("");
  const [order, setOrder] = useState("");
  const [type, setType] = useState<string[] | []>([""]);
  const dispatch = useAppDispatch();

  const options = [
    { label: "EDF", value: "EDF" },
    { label: "CAO", value: "CAO" },
    { label: "SFO", value: "SFO" },
  ];

  const handleCheckBox = (val: string[]) => setType(val);
  const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setItem(e.target.value);
  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOrder(e.target.value);
  const Apply = () => {
    const itemId = item.split(",") || [item || ""];
    const orderID = order.split(",") || [order || ""];
    const option = type.length ? type : [""];

    dispatch({
      type: GET_ITEMS,
      payload: {
        itemId,
        orderID,
        type: option,
      },
    });
    onClose();
  };

  const handleReset = () => {
    setItem("");
    setOrder("");
    setType([]);
    dispatch({
      type: GET_ITEMS,
      payload: {},
    });
  };

  return (
    <>
      <Drawer
        extra={
          <Button type={"link"} onClick={handleReset}>
            Reset all
          </Button>
        }
        title=""
        placement="right"
        onClose={onClose}
        open={isVisible}
        footer={
          <div>
            <Space block size={200}>
              <Button type={"link"} block onClick={onClose}>
                Cancel
              </Button>
              <Button type={"link"} block onClick={Apply}>
                Apply
              </Button>
            </Space>
          </div>
        }
      >
        <Form layout="vertical">
          <Form.Item label={"Item"}>
            <TextArea
              value={item}
              placeholder="Item ID (Ex. “67344383”)"
              autoSize={{ minRows: 2, maxRows: 6 }}
              onChange={handleItemChange}
            />
          </Form.Item>
          <Form.Item label={"Order #"}>
            <TextArea
              value={order}
              onChange={handleOrderChange}
              placeholder="Order ID (Ex. “673444444383”)"
              autoSize={{ minRows: 2, maxRows: 6 }}
            />
          </Form.Item>
        </Form>
        <div>
          <Checkbox.Group
            value={type}
            options={options}
            onChange={handleCheckBox}
          />
        </div>
      </Drawer>
    </>
  );
};

export default AppDrawer;
