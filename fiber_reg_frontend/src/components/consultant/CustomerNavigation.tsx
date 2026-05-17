import React from "react";
import { NavLink, useParams } from "react-router-dom";

interface CustomerNavigationProps {
  customerId: number;
}

const CustomerNavigation = (props: CustomerNavigationProps) => {
  return (
    <nav className="navbar bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/page/consultant/customer/search" end>
          Consultant
        </NavLink>
        <div className="d-flex gap-3 me-auto">
          <NavLink to={`/page/consultant/customer/${props.customerId}/summary`} end>
            Summary
          </NavLink>
          <NavLink to={`/page/consultant/customer/${props.customerId}/installations`} end>
            Installations
          </NavLink>
          <NavLink to={`/page/consultant/customer/${props.customerId}/new-order`} end>
            New order
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default CustomerNavigation;
