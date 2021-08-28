import React from "react";
import { Card } from "antd";

const CustomerCard = (props) => {
  const { customer } = props;

  return (
    <div>
      <Card title={customer.username} style={{ margin:5,width: 250 ,backgroundColor:'#a8d1f1'}}>
        <p>Contact Number : {customer.contact}</p>
        <p>Pincode : {customer.pincode}</p>
        <p>Time Stamp : {customer["createdAt"].split('T')[1].substring(0,8)}</p>
      </Card>
    </div>
  );
};

export default CustomerCard;
