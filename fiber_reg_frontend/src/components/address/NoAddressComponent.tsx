import React from "react";
import { AddressType } from "../../enum/AddressType";

interface NoAddressComponentProps {
  customerId: number;
  type: AddressType;
}

const NoAddressComponent = (props: NoAddressComponentProps) => {
  let href = "";
  if (props.type == AddressType.REGISTERED) {
    href = `/customer/${props.customerId}/create-registered-address`;
  } else if (props.type == AddressType.MAILING) {
    href = `/customer/${props.customerId}/create-mailing-address`;
  } else if (props.type == AddressType.BILLING) {
    href = `/customer/${props.customerId}/create-billing-address`;
  } else if (props.type == AddressType.SHIPPING) {
    href = `/customer/${props.customerId}/create-shipping-address`;
  }

  return (
    <>
      <span>Brak adresu</span>
      <span>
        <a href={href}>
          <button className="btn btn-warning">Dodaj nowy</button>
        </a>
      </span>
    </>
  );
};

export default NoAddressComponent;
