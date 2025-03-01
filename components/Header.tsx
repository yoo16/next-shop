import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="p-3 border-b border-gray-200">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/svg/logo.svg" alt="Next Shop" width={40} height={40} />
                        <span className="font-bold text-xl">Next Shop</span>
                    </Link>
                </div>
                {/* 検索バー */}
                <div className="flex-grow mx-4">
                    <form>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="検索"
                                className="w-full rounded-xl pl-4 pr-12 py-2 text-gray-600"
                            />
                            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                                <Image src="/svg/search.svg" alt="検索" width={20} height={20} className="" />
                            </button>
                        </div>
                    </form>
                </div>
                {/* 右側メニュー */}
                <div className="flex items-center space-x-4">
                    <a href="/product" className="hover:underline">アイテム</a>
                    <a href="#" className="hover:underline">アカウント</a>
                    <a href="#" className="hover:underline">注文履歴</a>
                    <a href="#" className="hover:underline">カート</a>
                </div>
            </div>
        </header>
    );
}
