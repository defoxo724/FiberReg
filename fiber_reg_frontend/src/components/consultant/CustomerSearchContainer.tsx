import React from "react";
import { useSearchCustomer } from "../../hooks/CustomerHooks";
import type { CustomerListElementDto } from "../../DTO/CustomerDtos";

const CustomerSearchContainer = () => {
  const [searchText, setSearchText] = React.useState<string>("");

  const { data, isLoading, isError } = useSearchCustomer(searchText);

  return (
    <div>
      <input type="search" placeholder="Wyszukaj klienta..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />

      {isLoading && <p>Loading...</p>}

      {isError && <p>Error</p>}

      {!isLoading && data?.length === 0 && <p>Brak wyników</p>}

      <div>
        {data?.map((customer: CustomerListElementDto) => (
          <div key={customer.id}>
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

export default CustomerSearchContainer;
