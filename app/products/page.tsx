import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">商品一覧</h1>
      <ProductList />
    </main>
  );
}