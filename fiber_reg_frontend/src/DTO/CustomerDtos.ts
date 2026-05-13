export interface CustomerListElementDto {
  id: number;
  name: string;
}

export interface CustomerCreatedResponse {
  id: number;
  name: string;
}

export interface CreateCustomerRequest {
  name: string;
}

export interface FullCustomerDataResponse {
  id: number;
  name: string;

  registeredAddressId: number;
  mailingAddressId: number;
  billingAddressId: number;
  shippingAddressId: number;
}
