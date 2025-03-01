import { dummyProducts } from '@/data/products';
import Image from 'next/image';

interface PageProps {
    params: { id: string };
}

export default function ProductDetail({ params: { id } }: PageProps) {
    // dummyProductsをproductsに代入
    const products = dummyProducts;
    // idと一致する商品を取得
    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return (
            <div className="container mx-auto p-6">
                <p>商品が見つかりませんでした。{id}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Image
                        src={product.imageUrl || '/placeholder.png'}
                        alt={product.name}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-800 mb-2">
                        <span className="text-sm">&yen;</span>
                        <span className="p-2 text-2xl">{Number(product.price).toLocaleString()}</span>
                        <span className="p-2 text-sm">(税込)</span>
                    </p>
                    <p className="mb-4">{product.description}</p>
                    <div className="border-t border-gray-300 p-4">
                        <h2 className="text-lg font-semibold mb-2">商品情報</h2>
                        <div className="flex items-center">
                            <div className="w-20 h-20 bg-gray-300 rounded-full mr-2">
                                <Image
                                    src={product.imageUrl || '/placeholder.png'}
                                    alt={product.name}
                                    width={80}
                                    height={80}
                                    className="rounded-lg" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <p>カテゴリー: {product.categoryId}</p>
                            <p>ブランド: {product.brand}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <a href="/product" className="text-blue-600 hover:underline">
                    商品一覧に戻る
                </a>
            </div>
        </div>
    );
}