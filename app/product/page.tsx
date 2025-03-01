import ProductList from "@/components/ProductList";
import { dummyProducts } from '@/data/products';

export default function Home() {
  const products = dummyProducts;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">アイテム</h1>
      <ProductList products={products} />
    </div>
  );
}