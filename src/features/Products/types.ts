export type Product = {
  name: string,
  type: ProductType,
  price: number,
  lager: number,
};

export enum ProductType {
  COMPUTER = 'COMPUTER',
  PHONE = 'PHONE',
  ACCESSORIES = 'ACCESSORIES',
  PHOTO = 'PHOTO',
};