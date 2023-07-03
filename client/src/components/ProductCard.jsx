import { addToCart } from "../slices/cartSlice";
import { addToWishlist, removeFromWishlist } from "../slices/wishList";
import star from '../assets/green_star.svg'
import { useDispatch } from "react-redux";
import { Link} from 'react-router-dom';

const ProductCard = (product) => {
    const dispach=useDispatch()
    const {name, _id, price, stock, discription, photos}=product?.product;
    
    const handleAddToCart=()=>{
        dispach(addToCart({
          secureURL:photos[0]?.secureURL,
          name,
          productId:_id,
          count:1,
          price
        }))
    }
  return (
    <div
      className="rounded-xl w-[250px] h-[380px] my-2"
    >
      <Link to={"/admin/product/" + _id}>
        {/* upper div */}
        <div className="h-[60%] overflow-hidden duration-500 rounded-xl hover:scale-[1.15] bg-[#f5f6f6]">
            <img className="mx-auto h-full" src={photos[0]?.secureURL} alt="image" />
        </div>
      </Link>
      {/* Lower div  */}
      <div className=" flex justify-between flex-col h-[40%]">
        <div className="flex justify-between py-2">
          <p className="text-[20px] font-bold">{name}</p>
          <p className="text-[12px] font-bold">Rs. <span className="text-black  text-[22px]">{price}</span>.00</p>
        </div>
        <p className="text-[12px] text-slate-400">{discription}</p>
        <p className="flex text-[12px]">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <span>(126)</span></p>
        {/* buttons */}
        <div>
          <button onClick={()=>{handleAddToCart(product.product)}} className="duration-450 hover:bg-green-800 hover:text-white px-4 py-2 rounded-[50px] border-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
