export interface Product {
    id: string | number;
    name: string;
    catgoryId?: string | number;
    brand?: string;
    description?: string;
    price: number | string;
    imageUrl: string;
}
