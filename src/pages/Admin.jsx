import React from "react";
import AddProductForm from "../components/Products/AddProductForm";
import ProductTable from "../components/Products/ProductTable";

function Admin() {
  return (
    <div className="mt-4 container">
      <ProductTable />
      <AddProductForm></AddProductForm>
    </div>
  );
}

export default Admin;
