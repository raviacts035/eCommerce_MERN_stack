import {useSelector} from 'react-redux';
import ProductCard from '../components/ProductCard';

const CheckOut=()=>{
    const CartItems=useSelector(store=>store.cart.items)
    console.log(CartItems)    
    return (
        <section>
            <div>Cart</div>
            {CartItems.length && <div>cart is empty</div>}
            <section className='flex flex-wrap'>
            {
                CartItems.map(product=>{
                    return <ProductCard key={CartItems._id} product={product}/>
                })
            }
            </section>
        </section>
    )
}

export default CheckOut