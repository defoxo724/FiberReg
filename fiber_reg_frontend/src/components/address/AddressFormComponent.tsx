import React, { useState } from "react";
import { useFetchCities, useFetchCommunes, useFetchDistricts, useFetchProvinces } from "../../hooks/AddressFormHooks";
import type { AddressCreateRequest } from "../../DTO/AddressDtos";
import Select from "../ui/Select";

interface AddressFormComponentProps {
  onSubmit: (data: AddressCreateRequest) => void;
}

const AddressFormComponent = (props: AddressFormComponentProps) => {
  const [addressCreateRequest, setAddressCreateRequest] = useState<AddressCreateRequest>({
    province: "",
    district: "",
    commune: "",
    city: "",
    street: "",
    houseNumber: 0,
    apartmentNumber: 0,
    zipCode: "",
  });

  const { data: provincesData, isLoading, isError } = useFetchProvinces();
  const { data: districtsData } = useFetchDistricts(addressCreateRequest.province);
  const { data: communesData } = useFetchCommunes(addressCreateRequest.province, addressCreateRequest.district);
  const { data: citiesData } = useFetchCities(addressCreateRequest.province, addressCreateRequest.district, addressCreateRequest.commune);

  /*
  Select
  */
  const updateProvince = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAddressCreateRequest({
      ...addressCreateRequest,
      province: e.target.value,
      district: "",
      commune: "",
      city: "",
    });
  };

  const updateDistrict = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAddressCreateRequest({
      ...addressCreateRequest,
      district: e.target.value,
      commune: "",
      city: "",
    });
  };

  const updateCommune = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAddressCreateRequest({
      ...addressCreateRequest,
      commune: e.target.value,
      city: "",
    });
  };

  const updateCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAddressCreateRequest({
      ...addressCreateRequest,
      city: e.target.value,
    });
  };

  /*
    Inputs
  */
  const updateStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressCreateRequest({
      ...addressCreateRequest,
      street: e.target.value,
    });
  };

  const updateHouseNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressCreateRequest({
      ...addressCreateRequest,
      houseNumber: parseInt(e.target.value),
    });
  };

  const updateApartmentNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressCreateRequest({
      ...addressCreateRequest,
      apartmentNumber: parseInt(e.target.value),
    });
  };

  const updateZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressCreateRequest({
      ...addressCreateRequest,
      zipCode: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!addressCreateRequest.province || !addressCreateRequest.district || !addressCreateRequest.commune || !addressCreateRequest.city) return;

    props.onSubmit(addressCreateRequest);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <div>
        <Select title={"Województwo"} onChange={updateProvince} options={provincesData?.map((p) => [p, p]) || []} selected={addressCreateRequest.province} />
        <Select title={"Powiat"} onChange={updateDistrict} options={districtsData?.map((p) => [p, p]) || []} selected={addressCreateRequest.district} />
        <Select title={"Gmina"} onChange={updateCommune} options={communesData?.map((p) => [p, p]) || []} selected={addressCreateRequest.commune} />
        <Select title={"Miasto"} onChange={updateCity} options={citiesData?.map((p) => [p, p]) || []} selected={addressCreateRequest.city} />
      </div>

      <div>
        <label htmlFor="street">Ulica</label>
        <input type="text" id="street" value={addressCreateRequest.street} onChange={updateStreet} />
      </div>
      <div>
        <label htmlFor="houseNumber">Numer domu</label>
        <input type="text" id="houseNumber" value={addressCreateRequest.houseNumber} onChange={updateHouseNumber} />
      </div>

      <div>
        <label htmlFor="apartmentNumber">Numer mieszkania</label>
        <input type="text" id="apartmentNumber" value={addressCreateRequest.apartmentNumber} onChange={updateApartmentNumber} />
      </div>

      <div>
        <label htmlFor="zipCode">Kod pocztowy</label>
        <input type="text" id="zipCode" value={addressCreateRequest.zipCode} onChange={updateZipCode} />
      </div>

      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddressFormComponent;
