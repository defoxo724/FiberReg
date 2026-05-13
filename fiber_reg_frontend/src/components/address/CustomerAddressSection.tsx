import React from "react";
import ShowAddressComponent from "./ShowAddressComponent";
import NoAddressComponent from "./NoAddressComponent";
import type { AddressType } from "../../enum/AddressType";

interface CustomerAddressSectionProps {
  title: string;
  addressType: AddressType;
  customerId: number;
  addressId: number | null;
}

const CustomerAddressSection = (props: CustomerAddressSectionProps) => {
  return (
    <div>
      <div className="border-bottom">
        {props.title}
        {props.addressId != null ? (
          <ShowAddressComponent addressType={props.addressType} customerId={props.customerId} />
        ) : (
          <NoAddressComponent customerId={props.customerId} type={props.addressType} />
        )}
      </div>
    </div>
  );
};

export default CustomerAddressSection;
