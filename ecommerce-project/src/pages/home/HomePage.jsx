import { Header } from '../../components/Header';
import './HomePage.css'
import { products } from '../../../starting-code/data/products'
import axios from 'axios'
import { useEffect, useState } from "react";
import { ProductsGrid } from './Productsgrid';


export function HomePage({cart}) {

//   useEffect(() => {
//     async function loadProducts() {
//       try {
//         const res = await fetch("http://localhost:3000/api/products");
//         const data = await res.json();
//         console.log("Fetched products:", data);

//         // 👇 Adjust this depending on your API shape
//         // If your API returns { products: [...] } — use data.products
//         // If it returns [...] — use data
//         setProducts(Array.isArray(data) ? data : data.products || []);
//       } catch (err) {
//         console.error("Error loading products:", err);
//       }
//     }

//     loadProducts();
//   }, []);


  const [products, setProducts] = useState([]);
    useEffect(()=>{
      const getHomeData = async()=>{
        const response = await axios.get("/api/products")
        setProducts(response.data)
      }
      getHomeData()
    }, [])

  return (
    <>
      <title>Home</title>
      <Header cart={cart}/>
      <div className="home-page">
        <ProductsGrid products={products}/>
      </div>
    </>
  );
}
