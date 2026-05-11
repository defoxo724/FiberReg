import { useState } from "react";
import GeoSendJsonComponent from "./GeoSendJsonComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GeoListJsonComponent from "./GeoListJsonComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GeoSendJsonComponent />
        <GeoListJsonComponent />
      </QueryClientProvider>
    </>
  );
}

export default App;
