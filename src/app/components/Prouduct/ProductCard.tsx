"use client";
import { PlusIcon, RatingIcon } from "@/app/assets/icons";
import { useRouter } from "next/navigation";

import { Product } from "@/app/products/useProduct";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/products/${product.id}`)}
      key={product.id}
      className="bg-[#1f1f1f] flex flex-col px-4 py-4 rounded-md"
    >
      <div className="w-full flex justify-center">
        <Image src={product.images[0]} alt="" width={100} height={100} />
      </div>
      <div className="px-2">
        <div className="flex items-center">
          <RatingIcon />
          <div className="ml-1">{product.rating}</div>
        </div>
        <div className=" truncate">{product.title}</div>
        <p className="truncate my-1 text-xs text-[#FCF9F2]/60">
          {product.description}
        </p>
        <div className="flex justify-between">
          <p className="m-0 text-white">{`$${product.price}`}</p>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
}
