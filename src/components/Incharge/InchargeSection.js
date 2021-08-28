import React from "react";
import { CustomerCard } from '../index';

const InchargeSection = (props) => {
  const { customers } = props;
  return (
    <div >
      <div><h1 style={{color:'red',textAlign:'center'}}>Alerts , Need Help !!!!!!!</h1></div>
      <div style={{display:'flex',flexWrap:'wrap'}}>
      {customers &&
        customers.map((customer, index) => {
          return (
              <CustomerCard customer={customer} />
          );
        })}
        </div>
    </div>
  );
};

export default InchargeSection;
