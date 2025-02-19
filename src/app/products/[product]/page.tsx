import { BackIcon } from "@/app/assets/icons";
import Link from "next/link";
import ProductPage from "@/app/components/Prouduct/Product";
export default async function Page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const slug = (await params).product;

  return (
    <div className="h-full md:rounded-xl  md:my-12 flex flex-col w-full bg-[#0a0a0a] px-5 py-12">
      <Link href={"/products"} className="border-0 bg-transparent w-fit">
        <BackIcon></BackIcon>
      </Link>
      <div className="flex-1 ">
        <ProductPage id={slug} />
      </div>
    </div>
  );
}
