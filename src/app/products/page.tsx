"use client";
import { useEffect } from "react";
import { category, useCategories, useProductsStore } from "./useProduct";
import ProductCard from "../components/Prouduct/ProductCard";
export default function Page() {
  const { products, setProducts } = useProductsStore();
  const { category, setCategory } = useCategories();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/fragrances",
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  const changeCategory = async (category: category) => {
    setCategory(category);
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`,
      );
      const products = await response.json();
      setProducts(products.products);
      console.log(products);
    } catch (err) {
      console.log(err);
    }
  };

  const categories = ["fragrances", "beauty", "laptops"];

  return (
    <div className="h-full md:rounded-xl md:my-12 flex flex-col w-full bg-[#0a0a0a] px-5 py-12">
      <h1 className="text-[#FCF9F2]">Product List</h1>
      <div className="flex gap-x-2 py-4">
        {categories.map((cate) => (
          <button
            key={cate}
            onClick={() => changeCategory(cate as category)}
            className={`px-4 py-2 cursor-pointer rounded-xl ${category === cate ? "bg-[#F9D03F] text-black" : "bg-transparent text-white/60"}   border-0 `}
          >
            {cate[0].toUpperCase() + cate.slice(1)}
          </button>
        ))}
      </div>
      <div className="h-[700px] grid gap-y-4 gap-x-4 grid-cols-2 overflow-auto">
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
