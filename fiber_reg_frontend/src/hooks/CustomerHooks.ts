import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ApiResponse } from "./ApiResponse";
import type { CreateCustomerRequest, CustomerCreatedResponse, CustomerListElementDto, FullCustomerDataResponse } from "../DTO/CustomerDtos";
import type { AddressCreateResponse } from "../DTO/AddressDtos";
import type { AddressType } from "../enum/AddressType";


export const useCreateCustomer = () => {
  return useMutation({
    mutationFn: async (data: CreateCustomerRequest) => {
      const res = await axios.post("http://localhost:8080/customers", data);

      return res.data as CustomerCreatedResponse;
    },
  });
};

export const useFetchCustomer = (customerId: number): ApiResponse<FullCustomerDataResponse> => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["customers", customerId],
    queryFn: async () => {
      const res = await axios.get("http://localhost:8080/customers/" + customerId);
      return res.data as FullCustomerDataResponse;
    },
  });
  return { data, isLoading, isError };
};

export const useFetchAllCustomers = (): ApiResponse<CustomerListElementDto[]> => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:8080/customers");
      return res.data as CustomerListElementDto[];
    },
  });
  return { data, isLoading, isError };
};

export const useFetchAddress = (customerId: number, addressType: AddressType): ApiResponse<AddressCreateResponse> => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["address", addressType, customerId],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:8080/customers/${customerId}/addresses/${addressType}`);
      return res.data as AddressCreateResponse;
    },
  });
  return { data, isLoading, isError };
};

export const useSearchCustomer = (searchString: string) => { 
    const { data, isLoading, isError } = useQuery({
    queryKey: ["customers_search", searchString],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:8080/customers/search`, {params: {searchString: searchString}});
      return res.data as CustomerListElementDto[];
    },
  });
  return { data, isLoading, isError };
}
