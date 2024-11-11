import React, { createContext, useState, ReactNode } from 'react';


type CartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  calculateTotal: () => number;
};


export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);


  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };


  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};