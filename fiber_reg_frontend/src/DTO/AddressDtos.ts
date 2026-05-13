export interface AddressCreateRequest {
  province: string;
  district: string;
  commune: string;
  city: string;
  street: string;
  houseNumber: number;
  apartmentNumber: number;
  zipCode: string;
}

export interface AddressCreateResponse {
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