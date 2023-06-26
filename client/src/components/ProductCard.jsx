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
      className="p-2 border-2 rounded-lg w-[250px] h-[340px] bg-blue-200 m-1"
    >
      <a className=" border-2 border-black" href={"/admin/product/" + _id}>
        {/* upper div */}
        <div className=" p-1">
          {photos.map((photo) => {
            <img className="w-[100px] h-[100px] border-2" src={photo?.secureURL} alt="image" />;
          })}
        </div>
      </a>
      {/* Lower div  */}
      <div className="h-[40%]">
        <div className="flex flex-col py-2">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-[12px] text-slate-400">{discription}</p>
        </div>
        <div className="border-1 bg-blue-200">
          <h3 className="text-lg">Price</h3>
          <p className="text-black">Rs.{price}</p>
        </div>
        {/* buttons */}
        <div>
          <button onClick={()=>{handleAddToCart(product.product)}} className="px-4 py-2 rounded-lg bg-red-400">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
