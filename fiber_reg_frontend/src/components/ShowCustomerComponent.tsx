import NoAddressComponent from "./address/NoAddressComponent";
import ShowAddressComponent from "./address/ShowAddressComponent";
import { AddressType, useFetchCustomer } from "../hooks/CustomerHooks";
import CustomerAddressSection from "./address/CustomerAddressSection";

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
      <div className="border-bottom">Nazwa klienta {data.name}</div>
      <CustomerAddressSection title={"Adres siedziby firmy"} addressType={AddressType.REGISTERED} customerId={props.id} addressId={data.registeredAddressId} />
      <CustomerAddressSection title={"Adres do korespondencji"} addressType={AddressType.MAILING} customerId={props.id} addressId={data.mailingAddressId} />
      <CustomerAddressSection title={"Adres do wysyłki faktur"} addressType={AddressType.BILLING} customerId={props.id} addressId={data.billingAddressId} />
      <CustomerAddressSection title={"Adres do wysyłki kurierskiej"} addressType={AddressType.SHIPPING} customerId={props.id} addressId={data.shippingAddressId} />
    </div>
  );
};

export default ShowCustomerComponent;
