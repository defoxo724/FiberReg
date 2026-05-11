import React from "react";
import CreateNewAddressComponent from "../components/address/AddressFormComponent";
import type { AddressCreatedDto } from "../dto/AddressCreatedDto";

const TestPage = () => {
  return (
    <div>
      <CreateNewAddressComponent
        onSubmit={function (data: AddressCreatedDto): void {
          console.log(data);
        }}
      />
    </div>
  );
};

export default TestPage;
