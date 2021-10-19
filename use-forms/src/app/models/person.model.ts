export interface Person {
  fullName: string;
  age: number;
  isAdmin: boolean;
  addresses: Address[];
  adminName: string;
  hobbies: string[];
}

export interface Address {
  city: string;
  country: string;
}
