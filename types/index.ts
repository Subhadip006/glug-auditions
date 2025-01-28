export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    category: string;
    stock: number;
    created_at: string;
  }

  export interface CartItem extends Product {
    quantity: number
  }
  
  export interface User {
    id: string
    email: string
  }