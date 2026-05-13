import React from "react";
import CreateNewAddressComponent from "../components/address/AddressFormComponent";
import type { AddressCreateRequest } from "../DTO/AddressDtos";

const TestPage = () => {
  return (
    <div>
      <CreateNewAddressComponent
        onSubmit={function (data: AddressCreateRequest): void {
          console.log(data);
        }}
      />
    </div>
  );
};

export default TestPage;
