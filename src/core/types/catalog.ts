export interface ICatalogItem {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: any;
  keyId: string;
}

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  option: string;
  quantity: number;
  keyId: string;
}
