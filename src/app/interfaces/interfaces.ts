export default interface Product {
  id: number;
  title: string;
  description: string;
  imageNames: string[];
  cookingTime: string;
  filling: Filling[];
  decor: Decor[];
}

export interface Filling {
  name: string;
  description: string;
}

export interface Decor {
  time: number;
  description: string;
}
