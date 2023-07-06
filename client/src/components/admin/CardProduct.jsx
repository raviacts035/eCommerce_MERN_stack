import {Link } from 'react-router-dom';
import DelProductDialog from './delProductDialog';


const CardProduct = (product) => {
    const {name, _id, price, stock, discription, photos}=product?.product;
    
    const handleAddToCart=()=>{
        
    }
  return (
    <div
      className="rounded-xl w-[250px] h-[350px] my-2"
    >
      <Link to={"/admin/product/" + _id}>
        {/* upper div */}
        <div className="h-[65%] overflow-hidden duration-500 rounded-xl hover:scale-[1.15] bg-[#f5f6f6]">
            <img className="h-[200px] mx-auto" src={photos[0]?.secureURL} alt="image" />
        </div>
      </Link>
      {/* Lower div  */}
      <div className=" flex justify-between flex-col h-[35%]">
        <div className="flex justify-between py-2">
          <p className="text-[20px] font-bold">{name}</p>
          <p className="text-[12px] font-bold">Rs. <span className="text-black  text-[22px]">{price}</span>.00</p>
        </div>
        <p className="text-[12px] text-slate-400">{discription}</p>
        {/* buttons */}
        <div className='flex justify-around items-center'>
          <Link to={`/admin/update/product/${ _id}`}>
            <button className="duration-400 hover:bg-yellow-400 hover:text-white px-4 py-2 rounded-[50px] border-2">Edit</button>
          </Link>
          <button className="duration-400 hover:bg-red-400 hover:text-white px-4 py-2 rounded-[50px] border-2">delete</button>
        </div>
      </div>
        {
          <DelProductDialog {...product}/>
        }
    </div>
  );
};

export default CardProduct;
