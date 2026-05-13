import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFetchAllCustomers } from "../hooks/CustomerHooks";

const GetAllCustomersComponent = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useFetchAllCustomers();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      {data?.map((customer) => (
        <div key={customer.id} style={{ border: "1px solid black", margin: "8px", padding: "8px", cursor: "pointer" }} onClick={() => navigate("/show-customer/" + customer.id)}>
          <p>
            <b>{customer.name}</b>
          </p>{" "}
        </div>
      ))}
    </div>
  );
};

export default GetAllCustomersComponent;
