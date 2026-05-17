import React from "react";
import CustomerNavigation from "../CustomerNavigation";
import { useParams } from "react-router-dom";
import CustomerAddressSection from "../../address/CustomerAddressSection";
import Accordion from "../../ui/Expand";
import { useFetchCustomer } from "../../../hooks/CustomerHooks";
import { AddressType } from "../../../enum/AddressType";

const CustomerSummary = () => {
  const params = useParams();

  const { data, isLoading, isError } = useFetchCustomer(Number(params.id));

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (!data) return null;

  return (
    <div>
      <CustomerNavigation customerId={Number(params.id)} />

      <h1>Summary</h1>
      <Accordion title={"Adres siedziby firmy"}>
        <CustomerAddressSection title={"Adres siedziby firmy"} addressType={AddressType.REGISTERED} customerId={Number(params.id)} addressId={data.registeredAddressId} />
      </Accordion>
      <Accordion title={"Adres do korespondencji"}>
        <CustomerAddressSection title={"Adres do korespondencji"} addressType={AddressType.MAILING} customerId={Number(params.id)} addressId={data.mailingAddressId} />
      </Accordion>
      <Accordion title={"Adres do wysyłki faktur"}>
        <CustomerAddressSection title={"Adres do wysyłki faktur"} addressType={AddressType.BILLING} customerId={Number(params.id)} addressId={data.billingAddressId} />
      </Accordion>
      <Accordion title={"Adres do wysyłki kurierskiej"}>
        <CustomerAddressSection title={"Adres do wysyłki kurierskiej"} addressType={AddressType.SHIPPING} customerId={Number(params.id)} addressId={data.shippingAddressId} />
      </Accordion>
    </div>
  );
};

export default CustomerSummary;
