export interface Person {
  fullName: string;
  age: number;
  isAdmin: boolean;
  address: Address;
}


export interface Address {
  city: string;
  country: string;
}
