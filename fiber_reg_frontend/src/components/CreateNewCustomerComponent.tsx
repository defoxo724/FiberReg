import React from "react";
import { useCreateCustomer } from "../hooks/CustomerHooks";

const CreateNewCustomerComponent = () => {
  const [name, setName] = React.useState<string>("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const mutation = useCreateCustomer();

  const handleSubmit = () => {
    mutation.mutate({
      name,
    });
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Nazwa firmy</label>
        <input type="text" name="name" id="name" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <input type="submit" value="Create" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateNewCustomerComponent;
