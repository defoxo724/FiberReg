import React from "react";
import CustomerNavigation from "../CustomerNavigation";
import { useParams } from "react-router-dom";

const CustomerInstallations = () => {
  const params = useParams();

  return (
    <div>
      <CustomerNavigation customerId={Number(params.id)} />
      <h1>Installations {params.id}</h1>
    </div>
  );
};

export default CustomerInstallations;
