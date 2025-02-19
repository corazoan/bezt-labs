import { create } from "zustand";
export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export const useProductsStore = create<{
  products: Product[];
  setProducts: (products: Product[]) => void;
}>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
export type category = "beauty" | "fragrances" | "laptops";

export const useCategories = create<{
  category: "beauty" | "fragrances" | "laptops";
  setCategory: (catergory: category) => void;
}>((set) => ({
  category: "fragrances",
  setCategory: (category) => set({ category }),
}));

export const useProduct = create<{
  product: Product | null;
  setProduct: (product: Product) => void;
}>((set) => ({
  product: null,
  setProduct: (product) => set({ product }),
}));
