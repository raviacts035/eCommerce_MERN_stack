import { useDispatch } from "react-redux";
import { decrementItemCount, incrementItemCount, removeFromCart, clearCart} from '../slices/cartSlice';
import { Link} from 'react-router-dom';

const MiniProductCard=({name, price,productId, secureURL, count})=>{
    // console.log(count)
    const dispach=useDispatch()

    const handleIncrement=(param)=>{
        dispach(incrementItemCount(param))
    }

    // decremt item count by 1
    const handleDecrement=(param)=>{
        dispach(decrementItemCount(param))
    }

    // remove item from cart
    const handleRemove=(param)=>{
        dispach(removeFromCart(param))
    }
    return (
        <article className="rounded-xl w-[250px] h-[380px] my-2">
            <Link to={"/admin/product/" + productId}>
                <div className="h-[60%] overflow-hidden rounded-xl bg-[#f5f6f6]">
                    <img className="mx-auto h-full" src={secureURL} alt="image" />
                </div>
            </Link>
            <div className=" flex justify-between flex-col h-[40%]">
                <div className="flex justify-between py-2">
                    <p className="text-[20px] font-bold">{name}</p>
                    <p className="text-[12px] font-bold">Rs. <span className="text-black  text-[22px]">{price}</span>.00</p>
                </div>
                {/* buttons */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 rounded-[50px] border-2">
                        <button onClick={()=>{handleDecrement({productId})}} className="p-2">-</button>
                        <p className="p-2">{count}</p>
                        <button onClick={()=>{handleIncrement({productId})}} className="p-2">+</button>
                    </div>
                    <div>
                        <button onClick={()=>{handleRemove({productId})}} className="duration-450 hover:bg-red-400 hover:text-white px-4 py-2 rounded-[50px] border-2">remove</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default MiniProductCard