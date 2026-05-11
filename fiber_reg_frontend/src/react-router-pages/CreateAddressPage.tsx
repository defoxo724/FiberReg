import { useParams } from "react-router-dom";
import CreateRegisteredAddressComponent from "../components/address/types/CreateAddressComponent";
import CreateAddressComponent from "../components/address/types/CreateAddressComponent";

interface CreateRegisteredAddressPageProps {
  addressType: "REGISTERED" | "BILLING" | "MAILING" | "SHIPPING";
}

const CreateRegisteredAddressPage = (props: CreateRegisteredAddressPageProps) => {
  const { id } = useParams();

  return <CreateAddressComponent id={Number(id)} addressType={props.addressType} />;
};

export default CreateRegisteredAddressPage;
