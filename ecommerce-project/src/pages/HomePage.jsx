import { Header } from '../components/Header';
import './HomePage.css'
import { products } from '../../starting-code/data/products'
import axios from 'axios'
// import { useEffect } from 'react';
import { useEffect, useState } from "react";


export function HomePage() {

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
  const [cart,setCart]=useState([])

    useEffect(()=>{
        axios.get("/api/products").then((res)=>{
        setProducts(res.data)
    })
    }, [])

    useEffect(()=>{
        axios.get('/api/cart-items').then((res)=>{
        setCart(res.data)
      })
    },[])



  return (
    <>
      <title>Home</title>

      <Header cart={cart}/>
      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-container">
              <div className="product-image-container">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="product-name limit-text-to-2-lines">
                {product.name}
              </div>

              <div className="product-rating-container">
                <img
                  className="product-rating-stars"
                  src={`images/ratings/rating-${
                    product.rating?.stars * 10
                  }.png`}
                  alt="rating"
                />
                <div className="product-rating-count link-primary">
                  {product.rating?.count}
                </div>
              </div>

              <div className="product-price">Rs {product.priceCents}</div>

              <div className="product-quantity-container">
                <select>
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="product-spacer"></div>

              <div className="added-to-cart">
                <img src="images/icons/checkmark.png" alt="added" />
                Added
              </div>

              <button className="add-to-cart-button button-primary">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
