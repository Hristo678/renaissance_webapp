
"use client"
import { addToCart, getCart } from "@utils/cart"
import { useEffect, useState } from "react";

const Cart = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        setCart(getCart())
    }, [])
    console.log(cart)
    return (<div>Cart</div>)
}

export default Cart