import React from "react";
import CustomerNavigation from "./CustomerNavigation";
import CustomerSearchBar from "./CustomerSearchBar";

const CustomerSearchView = () => {
  return (
    <div>
      {" "}
      <CustomerSearchBar />
      <button>New client</button>
    </div>
  );
};

export default CustomerSearchView;
