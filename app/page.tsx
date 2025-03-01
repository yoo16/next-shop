export default function Home() {
  return (
    <>


      {/* プロモーションバナー */}
      <section className="bg-white shadow mt-4">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold mb-2">本日の特集</h2>
          <p className="text-gray-700">期間限定のディスカウントセールをお見逃しなく！</p>
        </div>
      </section>

      {/* 商品グリッド */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-4">おすすめ商品</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* 商品カード */}
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img src="https://via.placeholder.com/200" alt="商品画像" className="w-full h-40 object-cover mb-4" />
            <h3 className="font-semibold text-lg">商品名 1</h3>
            <p className="text-gray-600">$19.99</p>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img src="https://via.placeholder.com/200" alt="商品画像" className="w-full h-40 object-cover mb-4" />
            <h3 className="font-semibold text-lg">商品名 2</h3>
            <p className="text-gray-600">$29.99</p>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img src="https://via.placeholder.com/200" alt="商品画像" className="w-full h-40 object-cover mb-4" />
            <h3 className="font-semibold text-lg">商品名 3</h3>
            <p className="text-gray-600">$39.99</p>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img src="https://via.placeholder.com/200" alt="商品画像" className="w-full h-40 object-cover mb-4" />
            <h3 className="font-semibold text-lg">商品名 4</h3>
            <p className="text-gray-600">$49.99</p>
          </div>
          {/* 必要に応じてさらに商品カードを追加 */}
        </div>
      </section>
    </>
  );
}