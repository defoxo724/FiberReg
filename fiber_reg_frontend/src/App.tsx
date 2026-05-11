import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import RootPage from "./react-router-pages/RootPage";
import GetAllCustomersPage from "./react-router-pages/GetAllCustomersPage";
import ShowCustomerPage from "./react-router-pages/ShowCustomerPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TestPage from "./react-router-pages/TestPage";
import CreateAddressPage from "./react-router-pages/CreateAddressPage";

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
            <Route path="/customer/:id/create-registered-address" element={<CreateAddressPage addressType={"REGISTERED"} />} />
            <Route path="/customer/:id/create-mailing-address" element={<CreateAddressPage addressType={"MAILING"} />} />
            <Route path="/customer/:id/create-billing-address" element={<CreateAddressPage addressType={"BILLING"} />} />
            <Route path="/customer/:id/create-shipping-address" element={<CreateAddressPage addressType={"SHIPPING"} />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
