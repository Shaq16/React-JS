import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  return <h1 className="text-2xl font-bold p-4">Product {id}</h1>;
}
