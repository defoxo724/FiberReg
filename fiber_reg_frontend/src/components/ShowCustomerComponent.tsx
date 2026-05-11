import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { CustomerFullDataDto } from "../dto/CustomerFullDataDto";
import NoAddressComponent from "./address/NoAddressComponent";
import ShowAddressComponent from "./address/ShowAddressComponent";

interface ShowCustomerComponentProps {
  id: number;
}

const ShowCustomerComponent = (props: ShowCustomerComponentProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["customers", props.id],
    queryFn: async () => {
      const res = await axios.get("http://localhost:8080/customers/" + props.id);
      return res.data as CustomerFullDataDto;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (!data) return null;

  return (
    <div>
      <div className="border-bottom">Nazwa klienta {data.name}</div>
      <div className="border-bottom">
        Adres siedziby firmy:{" "}
        {data.registeredAddressId != null ? <ShowAddressComponent addressType={"REGISTERED"} userId={props.id} /> : <NoAddressComponent customerId={props.id} type={"REGISTERED"} />}
      </div>
      <div className="border-bottom">
        Adres do korespondencji: {data.mailingAddressId != null ? <ShowAddressComponent addressType={"MAILING"} userId={props.id} /> : <NoAddressComponent customerId={props.id} type={"MAILING"} />}
      </div>
      <div className="border-bottom">
        Adres do wysyłki faktur: {data.billingAddressId != null ? <ShowAddressComponent addressType={"BILLING"} userId={props.id} /> : <NoAddressComponent customerId={props.id} type={"BILLING"} />}
      </div>
      <div className="border-bottom">
        Adres do wysyłki kurierskiej:{" "}
        {data.shippingAddressId != null ? <ShowAddressComponent addressType={"SHIPPING"} userId={props.id} /> : <NoAddressComponent customerId={props.id} type={"SHIPPING"} />}
      </div>
    </div>
  );
};

export default ShowCustomerComponent;
