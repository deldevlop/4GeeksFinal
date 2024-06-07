import React, { useState, useEffect } from "react";
import { database } from "../../services/FirebaseConfig";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

function ProductTable() {
  const [products, setProducts] = useState([]);
  const productCollectionRef = collection(database, "Product");

  useEffect(() => {
    const updateTable = onSnapshot(productCollectionRef, (snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => updateTable();
  }, []);

  const deleteProduct = async (id) => {
    const productDoc = doc(database, "Product", id);
    await deleteDoc(productDoc);
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">ImageURL</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Subcategory</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.image}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.subcategory}</td>
              <td>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
