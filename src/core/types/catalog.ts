export interface IClothingItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: any;
}

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  option: string;
  quantity: number;
}
