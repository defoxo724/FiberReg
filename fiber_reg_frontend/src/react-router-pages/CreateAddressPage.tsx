import { useParams } from "react-router-dom";
import CreateRegisteredAddressComponent from "../components/address/types/CreateAddressComponent";
import CreateAddressComponent from "../components/address/types/CreateAddressComponent";
import type { AddressType } from "../enum/AddressType";

interface CreateRegisteredAddressPageProps {
  addressType: AddressType;
}

const CreateRegisteredAddressPage = (props: CreateRegisteredAddressPageProps) => {
  const { id } = useParams();

  return <CreateAddressComponent id={Number(id)} addressType={props.addressType} />;
};

export default CreateRegisteredAddressPage;
