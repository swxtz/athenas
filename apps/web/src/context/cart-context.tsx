"use client";

import { createContext, Dispatch, ReactNode, useEffect, useReducer } from "react";

type Item = {
  id: string;
  quantity: number;
}

type State = {
  items: Item[]
}

type Action =
  | { type: "ADD_ITEM", item: Item }
  | { type: "REMOVE_ITEM", id: string }
  | { type: "UPDATE_QUANTITY", id: string, quantity: number }
  | { type: "LOAD_CART", items: Item[] }

const initializeCart = (): State => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("CART");

    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        return { items: parsedCart };
      } catch (error) {
        console.error("Erro ao fazer parsing do JSON do localStorage:", error);
        return { items: [] };
      }
    }
  }
  return { items: [] };
};

const cartReducer = (state: State, action: Action): State => {
  switch (action.type) {
  case "ADD_ITEM": {
    const existingItem = state.items.find(item => item.id === action.item.id);
    if (existingItem) {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.item.id ? { ...item, quantity: item.quantity + action.item.quantity } : item
        )
      };
    }
    return { ...state, items: [...state.items, action.item] };
  }
  case "REMOVE_ITEM":
    return { ...state, items: state.items.filter(item => item.id !== action.id) };
  case "UPDATE_QUANTITY":
    return {
      ...state,
      items: state.items.map(item => item.id === action.id ? { ...item, quantity: action.quantity } : item)
    };
  case "LOAD_CART":
    return { ...state, items: action.items };
  default:
    return state;
  }
};

export const CartContext = createContext<{ state: State; dispatch: Dispatch<Action>} | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode}) {
  const [state, dispatch] = useReducer(cartReducer, initialState, initializeCart);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("CART", JSON.stringify(state.items));
    }
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const initialState: State = { items: [] };