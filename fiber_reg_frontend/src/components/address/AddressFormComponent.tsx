import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import type { AddressCreatedDto } from "../../dto/AddressCreatedDto";

interface AddressFormComponentProps {
  onSubmit: (data: AddressCreatedDto) => void;
}

const AddressFormComponent = (props: AddressFormComponentProps) => {
  const [province, setProvince] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [commune, setCommune] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [zipCode, setZipCode] = useState("");

  /* Województwo */
  const {
    data: provincesData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["provinces_form"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:60032/geo/provinces");
      return res.data as string[];
    },
  });

  /* Powiat */
  const { data: districtsData } = useQuery({
    queryKey: ["districts_form", province],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:60032/geo/${province}/districts`);
      return res.data as string[];
    },
    enabled: !!province,
  });

  /* Gmina */
  const { data: communesData } = useQuery({
    queryKey: ["communes_form", province, district],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:60032/geo/${province}/${district}/communes`);
      return res.data as string[];
    },
    enabled: !!province && !!district,
  });

  /* Miasto */
  const { data: citiesData } = useQuery({
    queryKey: ["cities_form", province, district, commune],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:60032/geo/${province}/${district}/${commune}/cities`);
      return res.data as string[];
    },
    enabled: !!province && !!district && !!commune,
  });

  const handleSubmit = () => {
    if (!province || !district || !commune || !city) return;
    props.onSubmit({
      province,
      district,
      commune,
      city,
      street,
      houseNumber,
      apartmentNumber,
      zipCode,
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <div>
        <label htmlFor="province">Województwo</label>
        <select
          id="province"
          value={province}
          onChange={(e) => {
            setProvince(e.target.value);
            setDistrict("");
            setCommune("");
            setCity("");
          }}
        >
          <option value=""></option>
          {provincesData?.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="district">Powiat</label>
        <select
          id="district"
          value={district}
          onChange={(e) => {
            setDistrict(e.target.value);
            setCommune("");
            setCity("");
          }}
        >
          <option value=""></option>
          {districtsData?.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="commune">Gmina</label>
        <select
          id="commune"
          value={commune}
          onChange={(e) => {
            setCommune(e.target.value);
            setCity("");
          }}
        >
          <option value=""></option>
          {communesData?.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="city">Miasto</label>
        <select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value=""></option>
          {citiesData?.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="street">Ulica</label>
        <input type="text" name="street" id="street" value={street} onChange={(e) => setStreet(e.target.value)} />
      </div>
      <div>
        <label htmlFor="houseNumber">Numer domu</label>
        <input type="text" name="houseNumber" id="houseNumber" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} />
      </div>
      <div>
        <label htmlFor="apartmentNumber">Numer mieszkania</label>
        <input type="text" name="apartmentNumber" id="apartmentNumber" value={apartmentNumber} onChange={(e) => setApartmentNumber(e.target.value)} />
      </div>
      <div>
        <label htmlFor="zipCode">Kod pocztowy</label>
        <input type="text" name="zipCode" id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddressFormComponent;
