import { addToCart } from "../slices/cartSlice";
import { addToWishlist, removeFromWishlist } from "../slices/wishList";
import { useDispatch } from "react-redux";

const ProductCard = (product) => {
    const dispach=useDispatch()
    const {name, _id, price, stock, discription, photos}=product?.product;
    
    const handleAddToCart=()=>{
        dispach(addToCart(product?.product))
    }
  return (
    <div
      className="rounded-xl w-[200px] sm:w-[18vw] h-[350px] my-2"
    >
      <a href={"/admin/product/" + _id}>
        {/* upper div */}
        <div className="h-[65%] overflow-hidden duration-500 rounded-xl hover:scale-[1.15] bg-[#f5f6f6]">
            <img className="w-full h-[200px]" src={photos[0]?.secureURL} alt="image" />
        </div>
      </a>
      {/* Lower div  */}
      <div className=" flex justify-between flex-col h-[35%]">
        <div className="flex justify-between py-2">
          <p className="text-[20px] font-bold">{name}</p>
          <p className="text-[12px] font-bold">Rs. <span className="text-black  text-[22px]">{price}</span>.00</p>
        </div>
        <p className="text-[12px] text-slate-400">{discription}</p>
        {/* buttons */}
        <div>
          <button onClick={()=>{handleAddToCart(product.product)}} className="duration-500 hover:bg-green-800 hover:text-white px-4 py-2 rounded-[50px] border-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
