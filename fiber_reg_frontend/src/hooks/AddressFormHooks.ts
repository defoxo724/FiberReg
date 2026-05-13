import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "./ApiResponse";
import axios from "axios";

/*
    Those hooks are used only in AddressFormComponent 
*/

// Województwo
export const useFetchProvinces = (): ApiResponse<string[]> => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["provinces_form"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:60032/geo/provinces");
      return res.data as string[];
    },
  });
  return { data, isLoading, isError };
};

// Powiat
export const useFetchDistricts= (province: string): ApiResponse<string[]> => {
  const { data: districtsData } = useQuery({
    queryKey: ["districts_form", province],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:60032/geo/${province}/districts`);
      return res.data as string[];
    },
    enabled: !!province,
  });

  return { data: districtsData, isLoading: false, isError: false };
};

// Gminy
export const useFetchCommunes = (province: string, district: string): ApiResponse<string[]> => {
      const { data: communesData } = useQuery({
    queryKey: ["communes_form", province, district],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:60032/geo/${province}/${district}/communes`);
      return res.data as string[];
    },
    enabled: !!province && !!district,
  });

  return { data: communesData, isLoading: false, isError: false };
}

// Miasta
export const useFetchCities = (province: string, district: string, commune: string): ApiResponse<string[]> => {
  const { data: citiesData } = useQuery({
    queryKey: ["cities_form", province, district, commune],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:60032/geo/${province}/${district}/${commune}/cities`);
      return res.data as string[];
    },
    enabled: !!province && !!district && !!commune,
  });

  return { data: citiesData, isLoading: false, isError: false };
}