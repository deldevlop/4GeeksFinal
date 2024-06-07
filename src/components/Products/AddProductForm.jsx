import React, { useState } from "react";
import { database } from "../../services/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function AddProductForm() {
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newImageURL, setNewImageURL] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newSubCategory, setNewSubCategory] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const productCollection = collection(database, "Product");

  const addProduct = async (event) => {
    event.preventDefault();

    await addDoc(productCollection, {
      name: newName,
      description: newDescription,
      price: Number(newPrice),
      category: newCategory,
      subcategory: newSubCategory,
      image: newImageURL,
    });
    setNewName("");
    setNewDescription("");
    setNewPrice(0);
    setNewCategory("");
    setNewSubCategory("");
    setNewImageURL("");
  };

  return (
    <form className="row g-4" onSubmit={addProduct}>
      <div className="col-md-6 col-sm-6">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="inputName"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
      </div>
      <div className="col-md-6 col-sm-6">
        <label htmlFor="inputDescription" className="form-label">
          Description
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="inputDescription"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
        />
      </div>
      <div className="col-md-6 col-sm-6">
        <label htmlFor="imageURL" className="form-label">
          ImageURL
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="inputImageURL"
          placeholder="imageURL"
          value={newImageURL}
          onChange={(event) => setNewImageURL(event.target.value)}
        />
      </div>
      <div className="col-md-6 col-sm-6">
        <label htmlFor="inputPrice" className="form-label">
          Price
        </label>
        <input
          required
          type="number"
          className="form-control"
          id="inputPrice"
          placeholder="Price"
          value={newPrice}
          onChange={(event) => setNewPrice(Number(event.target.value))}
        />
      </div>
      <div className="col-md-6 col-sm-6">
        <label htmlFor="inputCategory" className="form-label">
          Category
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="inputCategory"
          value={newCategory}
          onChange={(event) => setNewCategory(event.target.value)}
        />
      </div>
      <div className="col-md-6 col-sm-6">
        <label htmlFor="inputSubCategory" className="form-label">
          SubCategory
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="inputSubCategory"
          value={newSubCategory}
          onChange={(event) => setNewSubCategory(event.target.value)}
        />
      </div>
      <div className="col-12 text-center">
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </div>
    </form>
  );
}

export default AddProductForm;
