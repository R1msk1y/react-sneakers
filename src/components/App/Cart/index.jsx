import { useState } from "react";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import data from "./../../../data";

const Cart = () => {

    const [cart, setCart] = useState(data);

    const deleteProduct = (id) => {

        console.log('Delete!!', id);

        setCart((cart)=>{
            return cart.filter((product)=> {return id !== product.id})
        })

    };

    const increase = (id) => {
       
        setCart((cart)=>{
            return cart.map((product) => {

                if(product.id === id){

                    return {
                        ...product,
                        count: ++product.count,
                        priceTotal: ++product.count * product.price
                        
                    };
                }

                return product

            })
        })

    }

    const decrease = (id) => {
       
        setCart((cart)=>{
            return cart.map((product) => {

                if(product.id === id){

                    return {
                        ...product,
                        count: product.count - 1 > 1 ? product.count -1 : 1,
                        priceTotal: (product.count - 1 > 1 ? --product.count : 1) * product.price,
                        
                    };
                }

                return product

            })
        })

    }

    const products = cart.map((product)=> {

        return <Product
        key = {product.id}
        product = {product}
        deleteProduct = {deleteProduct}
        increase = {increase}
        decrease = {decrease}
        
        
        />

    })
    
    return ( <section className="cart">
    <CartHeader />
    {products}
    <CartFooter />


   

   


 
</section> );
}
 
export default Cart;