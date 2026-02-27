import ProductList from "@/components/ProductList";
import { dummyProducts } from '@/data/products';

export default function Home() {
  const products = [...dummyProducts].sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <>
      <section className="container mx-auto px-4 py-4">
        <h2 className="text-xl font-bold mb-4">おすすめ商品</h2>
        <ProductList products={products} />
      </section>
    </>
  );
}