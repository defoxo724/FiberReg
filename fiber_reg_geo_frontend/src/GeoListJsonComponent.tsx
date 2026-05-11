import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

type Address = {
  Id: number;
  Name: string;
  Type: string;
  Province: string;
  District: string;
  Commune: string;
  Latitude: number;
  Longitude: number;
};

const GeoListJsonComponent = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["addresses"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:60032/get-all");
      return res.data as Address[];
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Province</th>
            <th>District</th>
            <th>Commune</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((address) => (
            <tr key={address.Id}>
              <td>{address.Id}</td>
              <td>{address.Name}</td>
              <td>{address.Type}</td>
              <td>{address.Province}</td>
              <td>{address.District}</td>
              <td>{address.Commune}</td>
              <td>{address.Latitude}</td>
              <td>{address.Longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeoListJsonComponent;
