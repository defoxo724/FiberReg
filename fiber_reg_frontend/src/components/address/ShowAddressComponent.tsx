import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import type { AddressType } from "../../enum/AddressType";
import { useFetchAddress } from "../../hooks/CustomerHooks";

interface ShowAddressComponentProps {
  customerId: number;
  addressType: AddressType;
}

const ShowAddressComponent = (props: ShowAddressComponentProps) => {
  const { data, isLoading, isError } = useFetchAddress(props.customerId, props.addressType);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (!data) return null;

  return (
    <div>
      <div>
        <span className="fw-bold">Województwo: </span>
        <span>{data.province}</span>
      </div>
      <div>
        <span className="fw-bold">Powiat: </span>
        <span>{data.district}</span>
      </div>
      <div>
        <span className="fw-bold">Gmina: </span>
        <span>{data.commune}</span>
      </div>
      <div>
        <span className="fw-bold">Miasto: </span>
        <span>{data.city}</span>
      </div>
      <div>
        <span className="fw-bold">Kod pocztowy: </span>
        <span>{data.zipCode}</span>
      </div>
      <div>
        <span className="fw-bold">Ulica: </span>
        <span>{data.street}</span>
      </div>
      <div>
        <span className="fw-bold">Numer domu: </span>
        <span>{data.houseNumber}</span>
      </div>
      <div>
        <span className="fw-bold">Numer mieszkania: </span>
        <span>{data.apartmentNumber}</span>
      </div>
    </div>
  );
};

export default ShowAddressComponent;
