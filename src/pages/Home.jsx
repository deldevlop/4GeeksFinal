import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../services/FirebaseConfig";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../App.css";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(database, "HomeCart");
        const itemsSnapshot = await getDocs(itemsCollection);
        const itemsList = itemsSnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().Name,
          Url: doc.data().Url,
        }));
        setItems(itemsList);
      } catch (error) {
        console.error("Error fetching items: ", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <Header />
      <div>
        <div className="show_bg_2 d-flex justify-content-center align-items-center">
          <p className="title">SUMMER SALE</p>
        </div>
      </div>

      <p className="shop-sale p-3 text-center">Shop Sale</p>

      <div className="container-fluid text-center">
        <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
          {items.map((item) => (
            <div className="col" key={item.id}>
              <img src={item.Url} alt={item.name} />
              <p>
                <a className="text-uppercase" href="">
                  {item.name}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
