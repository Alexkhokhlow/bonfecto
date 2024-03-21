export default interface Product {
  id: number;
  title: string;
  description: string;
  imageNames: string[];
  cookingTime: string;
  filling: Filling[];
}

export interface Filling {
  name: string;
  description: string;
}
