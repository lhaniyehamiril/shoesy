export interface typeImg {
  main: string;
  top: string;
  under: string;
  side?: string;
}

export interface dataShoes {
  id: number;
  brand: string;
  name: string;
  images: typeImg;
  description: string;
  sizes: number[];
  price: number;
  discount: number;
  color: string[];
  mainColor: string;
}
