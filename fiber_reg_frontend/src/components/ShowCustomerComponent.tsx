import NoAddressComponent from "./address/NoAddressComponent";
import ShowAddressComponent from "./address/ShowAddressComponent";
import CustomerAddressSection from "./address/CustomerAddressSection";
import Accordion from "./ui/Expand";
import { useFetchCustomer } from "../hooks/CustomerHooks";
import { AddressType } from "../enum/AddressType";

interface ShowCustomerComponentProps {
  id: number;
}

const ShowCustomerComponent = (props: ShowCustomerComponentProps) => {
  const { data, isLoading, isError } = useFetchCustomer(props.id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (!data) return null;

  return (
    <div>
      <h1 className="border-bottom">{data.name}</h1>
      <Accordion title={"Adres siedziby firmy"}>
        <CustomerAddressSection title={"Adres siedziby firmy"} addressType={AddressType.REGISTERED} customerId={props.id} addressId={data.registeredAddressId} />
      </Accordion>
      <Accordion title={"Adres do korespondencji"}>
        <CustomerAddressSection title={"Adres do korespondencji"} addressType={AddressType.MAILING} customerId={props.id} addressId={data.mailingAddressId} />
      </Accordion>
      <Accordion title={"Adres do wysyłki faktur"}>
        <CustomerAddressSection title={"Adres do wysyłki faktur"} addressType={AddressType.BILLING} customerId={props.id} addressId={data.billingAddressId} />
      </Accordion>
      <Accordion title={"Adres do wysyłki kurierskiej"}>
        <CustomerAddressSection title={"Adres do wysyłki kurierskiej"} addressType={AddressType.SHIPPING} customerId={props.id} addressId={data.shippingAddressId} />
      </Accordion>
    </div>
  );
};

export default ShowCustomerComponent;
