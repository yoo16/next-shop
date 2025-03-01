import { dummyProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductList() {
  // dummyProductsをproductsに代入
  const products = dummyProducts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
