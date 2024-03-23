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

export interface OrderTime {
  id: number;
  time: string;
}

export interface OrderForm {
  name: string;
  type: string;
  filling: string;
  decor: string;
  date: string;
  time: string;
  communicationMethod: string;
  communicationData: string;
  notes: string;
}
