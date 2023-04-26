import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards/Cards";
import "./Products.css"

const Products = () => {
  const [ProductsState, setProductsState] = useState([]);

  const FetchProducts = async () => {
    await axios
      .get(`https://dummyjson.com/products`)
      .then((resp) => {
        console.log(resp.data.products);
        setProductsState(resp.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <div className="cContainer">
      <div className="Card_Contains">
      {ProductsState.map((prod, index) => {
        return (
          <Cards
            key={index}
            title={prod.title}
            images={prod.thumbnail}
            price={prod.price}
            brand={prod.brand}
            rating={prod.rating}
            inStock={prod.stock}
            prodDetails={prod.description}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Products;
