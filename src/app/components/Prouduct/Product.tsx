"use client";
import Image from "next/image";
import { useProduct } from "@/app/products/useProduct";
import { MinusIcon, PlusIconWithRound } from "@/app/assets/icons";
import { useEffect, useState } from "react";
import { RatingIcon } from "@/app/assets/icons";
import Toast from "../notification/Toast";
export default function ProductPage({ id }: { id: string }) {
  // const [product, setProduct] = useState<Product>();
  const [toasts, setToasts] = useState<string[]>([]);
  const { product, setProduct } = useProduct();
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const fetchProduct = async (id: string) => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const product = await response.json();
        setProduct(product);
        console.log(product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct(id);
  }, [id, setProduct]);

  const showToast = (message: string) => {
    setToasts((prev) => [...prev, message]);

    setTimeout(() => {
      setToasts((prev) => prev.slice(1)); // Remove the first toast after 3s
    }, 3000);
  };
  return (
    <div className="h-full  flex flex-col mt-12">
      <div className="w-full flex items-center ">
        {product?.images[0] && (
          <Image
            src={product.images[0]}
            alt={product.title || ""}
            width={315}
            height={280}
            className="mx-auto"
          />
        )}
      </div>
      <section className="px-2">
        <div className="flex justify-between h-fit">
          <p className="text-xl ">{product?.title} </p>
          <div className="flex items-center">
            <RatingIcon />
            <div className="ml-1 text-xl">{product?.rating}</div>
          </div>
        </div>
        <p className="my-0 text-white/60 w-[80%]">{product?.description}</p>
        <div className="flex justify-between h-fit py-4">
          <div className="w-fit items-center gap-x-1 justify-center flex ">
            <button
              className="bg-transparent border-0"
              onClick={() => {
                setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
              }}
            >
              <MinusIcon />
            </button>
            <p className="text-[#F9D03F]">{`${quantity}`}</p>
            <button
              className="bg-transparent border-0"
              onClick={() => {
                setQuantity((prev) => prev + 1);
              }}
            >
              <PlusIconWithRound />
            </button>
          </div>
          <p className="m-0 text-2xl text-white">{`$${product?.price}`}</p>
        </div>
      </section>
      <button
        className="mt-auto cursor-pointer mb-6 py-4 text-lg border-0 w-full rounded-md bg-[#F9D03F] hover:bg-[#E9B32A]"
        onClick={() => showToast("Product added to cart")}
      >
        Add to Cart
      </button>
      <div>
        {toasts.map((toast, index) => (
          <Toast
            key={index}
            message={toast}
            onCloseAction={() =>
              setToasts((prev) => prev.filter((_, i) => i !== index))
            }
          />
        ))}
      </div>
    </div>
  );
}
