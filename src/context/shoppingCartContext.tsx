import {createContext, useContext, ReactNode, useState } from "react";

const ShoppingCartContext = createContext({})

type ShoppingCartProviderProps = {
  children: React.ReactNode;
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number,
  increaseCartQuantity: (id: number) => void, 
  decreaseCartQuantity : (id: number) => void,
  removeFromCart : (id: number) => void
}

type CartItem = {
  id: number
  quantity: number
}

export function useShoppingCart(){
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProviderProps){
  
  const [cartItems, setCartItems ] = useState<CartItem[]>([]);
  
  function getItemQuantity(id: number) {
    return cartItems.find( item => item.id=== id)?.quantity || 0
  }

  function increaseCartQuantity(id: number) {
     setCartItems( currItems => {
       if(currItems.find( item => item.id === id ) == null ){
         return [ ...currItems, { id, quantity: 1}]
       }
       else{
         return currItems.map(item => {
           if(item.id === id){
             return { ...item, quantity: item.quantity ++ }
           }else{
             item
           }
         })
       }
       })
  }

  function decreaseCartQuantity(id: number) {
     setCartItems( currItems => {
       if(currItems.find( item => item.id === id ) ?.quantity === 1  ){
         return currItems.filter( item => item.id !== id )
       }
       else{
         return currItems.map(item => {
           if(item.id === id){
             return { ...item, quantity: item.quantity -1 }
           }else{
             item
           }
         })
       }
       })

  }

  function removeFromCart( id: number ){
     setCartItems( currItems => {
      return currItems.filter( item=> item.id !== id)
     }) 
  }


  return (
  <ShoppingCartContext.Provider value={{ 
    getItemQuantity, 
    increaseCartQuantity, 
    decreaseCartQuantity,
    removeFromCart
      }}> 
    { children }
  </ShoppingCartContext.Provider>)
}

