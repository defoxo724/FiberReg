import React from "react";

interface NoAddressComponentProps {
  customerId: number;
  type: "REGISTERED" | "MAILING" | "BILLING" | "SHIPPING";
}

const NoAddressComponent = (props: NoAddressComponentProps) => {
  let href = "";
  if (props.type == "REGISTERED") {
    href = `/customer/${props.customerId}/create-registered-address`;
  } else if (props.type == "MAILING") {
    href = `/customer/${props.customerId}/create-mailing-address`;
  } else if (props.type == "BILLING") {
    href = `/customer/${props.customerId}/create-billing-address`;
  } else if (props.type == "SHIPPING") {
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
