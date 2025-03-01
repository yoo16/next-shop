import { dummyProducts } from '@/data/products';

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
        <div className="container mx-auto p-6">
            <div className="bg-white shadow rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                <p className="text-gray-700">商品ID: {id}</p>
                <p className="text-gray-700">説明: {product.description}</p>
                <p className="text-gray-700">価格: {product.price}円</p>
            </div>
            {/* 戻るリンク */}
            <div className="mt-6">
                <a href="/products" className="text-blue-600 hover:underline">
                    商品一覧に戻る
                </a>
            </div>
        </div>
    );
}