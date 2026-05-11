import { useQuery } from "@tanstack/react-query";
import React from "react";
import type { AddressDto } from "../../dto/AddressDto";
import axios from "axios";

interface ShowAddressComponentProps {
  userId: number;
  addressType: "REGISTERED" | "BILLING" | "MAILING" | "SHIPPING";
}

const ShowAddressComponent = (props: ShowAddressComponentProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["address", props.addressType, props.userId],
    queryFn: async () => {
      let url = "";
      url = `http://localhost:8080/customers/${props.userId}/addresses/${props.addressType}`;
      const res = await axios.get(url);
      console.log(res);
      return res.data as AddressDto;
    },
  });

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
