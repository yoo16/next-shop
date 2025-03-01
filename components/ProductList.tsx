import { dummyProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
interface ProductListProps {
  products: typeof dummyProducts;
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
