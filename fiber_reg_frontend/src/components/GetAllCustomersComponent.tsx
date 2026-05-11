import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

type Customer = {
  id: number;
  name: string;
  voivodeship: string;
  county: string;
  municipality: string;
  locality: string;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  zipCode: string;
};

const GetAllCustomersComponent = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:8080/customers");
      return res.data as Customer[];
    },
  });

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
