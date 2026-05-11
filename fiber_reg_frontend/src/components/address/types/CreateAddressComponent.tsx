import React from "react";
import type { AddressCreatedDto } from "../../../dto/AddressCreatedDto";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import AddressFormComponent from "../AddressFormComponent";

interface CreateAddressComponentProps {
  id: number;
  addressType: "REGISTERED" | "BILLING" | "MAILING" | "SHIPPING";
}

const CreateAddressComponent = (props: CreateAddressComponentProps) => {
  let url = "";
  url = `http://localhost:8080/customers/${props.id}/addresses/${props.addressType}`;
  const mutation = useMutation({
    mutationFn: (data: AddressCreatedDto) => axios.post(url, data),
    onSuccess: () => {},
  });

  const handleSubmit = (data: AddressCreatedDto) => {
    console.log(data);
    mutation.mutate(data);
  };

  return <AddressFormComponent onSubmit={handleSubmit} />;
};

export default CreateAddressComponent;
