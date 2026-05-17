import React from "react";
import { useSearchCustomer } from "../../hooks/CustomerHooks";
import type { CustomerListElementDto } from "../../DTO/CustomerDtos";
import { useNavigate } from "react-router-dom";
import CustomerNavigation from "./CustomerNavigation";

const CustomerSearchBar = () => {
  const [searchText, setSearchText] = React.useState<string>("");

  const { data, isLoading, isError } = useSearchCustomer(searchText);

  const navigate = useNavigate();

  return (
    <div>
      {/* <CustomerNavigation /> */}
      <input type="search" placeholder="Wyszukaj klienta..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />

      {isLoading && <p>Loading...</p>}

      {isError && <p>Error</p>}

      {!isLoading && data?.length === 0 && <p>Brak wyników</p>}

      <div>
        {data?.map((customer: CustomerListElementDto) => (
          <div
            key={customer.id}
            style={{ cursor: "pointer" }}
            className="border"
            onClick={() => {
              navigate("/page/consultant/customer/" + customer.id + "/summary");
            }}
          >
            <div>
              <b>{customer.name}</b>
            </div>

            <div>ID: {customer.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSearchBar;
