import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import RootPage from "./react-router-pages/RootPage";
import GetAllCustomersPage from "./react-router-pages/GetAllCustomersPage";
import ShowCustomerPage from "./react-router-pages/ShowCustomerPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import TestPage from "./react-router-pages/TestPage";
import CreateAddressPage from "./react-router-pages/CreateAddressPage";
import { AddressType } from "./enum/AddressType";
import MainConsultantPage from "./pages/consultant/MainConsultantPage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <nav>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/get-all-customers">Customers</Link>
            </div>
            <div>
              <Link to="/test">test</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<RootPage />} />
            <Route path="/get-all-customers" element={<GetAllCustomersPage />} />
            <Route path="/show-customer/:id" element={<ShowCustomerPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/customer/:id/create-registered-address" element={<CreateAddressPage addressType={AddressType.REGISTERED} />} />
            <Route path="/customer/:id/create-mailing-address" element={<CreateAddressPage addressType={AddressType.MAILING} />} />
            <Route path="/customer/:id/create-billing-address" element={<CreateAddressPage addressType={AddressType.BILLING} />} />
            <Route path="/customer/:id/create-shipping-address" element={<CreateAddressPage addressType={AddressType.SHIPPING} />} />
            {/* There are temporary pages, they will be moved in a future to different app? */}
            <Route path="/page/consultant" element={<MainConsultantPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
