import { useParams } from "react-router-dom";
import ShowCustomerComponent from "../components/ShowCustomerComponent";

const ShowCustomerPage = () => {
  const { id } = useParams();
  return <ShowCustomerComponent id={Number(id)} />;
};

export default ShowCustomerPage;
