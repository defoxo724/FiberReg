import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ApiResponse } from "./ApiResponse";

interface CustomerListElementDto {
  id: number;
  name: string;
}

interface CustomerCreatedResponse {
  id: number;
  name: string;
}

interface CreateCustomerRequest {
  name: string;
}

interface FullCustomerDataResponse {
  id: number;
  name: string;

  registeredAddressId: number;
  mailingAddressId: number;
  billingAddressId: number;
  shippingAddressId: number;
}

interface AddressCreateResponse {
  id: number;
  province: string;
  district: string;
  commune: string;
  city: string;
  street: string;
  houseNumber: number;
  apartmentNumber: number;
  zipCode: string;
}

export enum AddressType {
  REGISTERED = "REGISTERED",
  BILLING = "BILLING",
  MAILING = "MAILING",
  SHIPPING = "SHIPPING",
}

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
