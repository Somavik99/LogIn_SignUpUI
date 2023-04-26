import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards/Cards";

const Products = () => {
  const [ProductsState, setProductsState] = useState([]);

  const FetchProducts = async () => {
    await axios
      .get(`https://dummyjson.com/products`)
      .then((resp) => {
        console.log(resp.data);
        setProductsState(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {ProductsState.map((prod, index) => {
        return <Cards  />;
      })}
    </div>
  );
};

export default Products;
