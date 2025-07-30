"use client"

import HomeCard from "@/components/home/card";
import { useEffect, useState } from "react";

export default function Home() {
  const [products , setProducts] = useState([]);

  useEffect(() =>{
    const fetchData = async() => {
      const response = await fetch("https://fakestoreapi.com/products");
      const productsRes = await response.json();
      setProducts(productsRes)
    }

    fetchData()
  },[])

  return (
    <div className="flex items-center justify-center">  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 sm:px-[160px] py-5">
        {products.map((product, idx) => (
          <div key={idx}>
            <HomeCard item={product}/>
          </div>
        ))}
      </div>
    </div>
  );
}
