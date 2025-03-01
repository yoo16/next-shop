import Link from "next/link";
import Image from "next/image";
import { Product } from "../types/Product"; // インターフェースのインポート

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="">
            <Link
                href={`/product/${product.id}`}
                className=""
            >
                <div>
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="mb-2 rounded w-full h-auto"
                    />
                </div>
                <div className="p-1">
                    <div className="text-sm text-gray-800">{product.name}</div>
                    <div>
                        <span className="p-1 text-xs text-gray-600">&yen;</span>
                        <span className="text-sm text-gray-800">
                            {Number(product.price).toLocaleString()}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
