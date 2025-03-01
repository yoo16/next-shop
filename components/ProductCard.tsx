import Link from "next/link";
import Image from "next/image";
import { Product } from "../types/Product"; // インターフェースのインポート

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="border border-gray-200 p-4 rounded shadow-sm">
            <h2 className="text-xl text-gray-500">{product.name}</h2>
            <p className="text-gray-500">￥{Number(product.price)}</p>
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={300}
                className="mb-2 w-full h-auto"
            />
            <Link
                href={`/products/${product.id}`}
                className="text-blue-600 hover:underline mt-2 inline-block"
            >
                詳細を見る
            </Link>
        </div>
    );
}
