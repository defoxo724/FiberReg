import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const CreateNewCustomerComponent = () => {
  const [name, setName] = React.useState<string>("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const mutation = useMutation({
    mutationFn: (data: any) => axios.post("http://localhost:8080/customers", data),
    onSuccess: () => {
      setName("");
    },
  });

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
