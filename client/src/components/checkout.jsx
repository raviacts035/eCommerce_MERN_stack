import {useSelector} from 'react-redux'

const CheckOut=()=>{
    const CartItems=useSelector(state=>state.cart.items)
    console.log(CartItems)
    return (
        <section>
            <div>Cart</div>
            <div>cart is empty</div>
        </section>
    )
}

export default CheckOut