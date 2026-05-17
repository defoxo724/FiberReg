import React from "react";
import { useParams } from "react-router-dom";
import CustomerNavigation from "../CustomerNavigation";

const CustomerNewOrder = () => {
  const params = useParams();

  return (
    <div>
      <CustomerNavigation customerId={Number(params.id)} />
      <h1>New order {Number(params.id)}</h1>
    </div>
  );
};

export default CustomerNewOrder;
