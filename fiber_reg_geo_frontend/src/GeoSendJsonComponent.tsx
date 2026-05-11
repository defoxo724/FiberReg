import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const GeoSendJsonComponent = () => {
    const queryClient = useQueryClient();

    const [json, setJson] = useState<string>();
    const [info, setInfo] = useState<string>();

    const mutation = useMutation({
        mutationFn: (data: any) =>
            axios.post("http://localhost:60032/import", JSON.parse(json!), {
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        onSuccess: (response) => {
            setJson("");
            setInfo(`Zmieniono ${response.data} rekordów`);

            queryClient.invalidateQueries({ queryKey: ["geo"] });
        },
    });

    const handleSubmit = () => {
        mutation.mutate(json);
    };

    return (
        <>
            <h1>{info}</h1>
            <a href="https://raw.githubusercontent.com/jjbartek/polskie-miejscowosci/refs/heads/main/data.json">
                https://raw.githubusercontent.com/jjbartek/polskie-miejscowosci/refs/heads/main/data.json
            </a>
            <label htmlFor="json">Wklej JSON(UWAGA: Operacja usuwa wszystkie dane z bazy danych i podmienia na podane w JSON)</label>
            <textarea id="json" onChange={(e) => setJson(e.target.value)}></textarea>
            <input type="button" value="Dalej" onClick={handleSubmit} />
        </>
    );
};

export default GeoSendJsonComponent;
