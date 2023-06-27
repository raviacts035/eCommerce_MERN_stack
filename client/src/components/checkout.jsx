import {useSelector} from 'react-redux';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import PostRequest from '../utils/PostRequest';
import { place_order_url,domain_url} from '../utils/index';

const CheckOut=()=>{
    const CartItems=useSelector(store=>store.cart.items);
    const [data,setData]=useState();
    const [addr1,setAddr1]=useState('');
    const [addr2,setAddr2]=useState('');
    const [addr3,setAddr3]=useState('');
    const [pincode,setPinCode]=useState();
    const [phone,setPhone]=useState();
    const [transactionId,setTransactionId]=useState('CASH_ON_DELIVERY');
    // const [totalAmount,setTotalAmount]=useState();

    var OrderProductList =[];
    var totalAmount=0;

    // form submit handler
    function handleSubmit(e){
        e.preventDefault();
        const orderForm=new FormData();
        orderForm.set('products',OrderProductList);
        orderForm.set('phoneNumber',phone)
        orderForm.set('amount',totalAmount)
        orderForm.set('transactionId',transactionId)
        orderForm.set('address',addr1+addr2+addr3+pincode)
        console.log(OrderProductList);
        // let body=JSON.stringify({
        //     product: OrderProductList,
        //     phoneNumber: phone,
        //     amount: totalAmount,
        //     transactionId: transactionId,
        //     address: addr1+addr2+addr3+pincode,
        // })
        PostRequest(domain_url+place_order_url,orderForm,setData)
        return
    }
    return (
        <section>
            <div>Cart</div>
            {/* {CartItems.length && <div>cart is empty</div>} */}
            <main className='flex flex-wrap'>
            {   
                CartItems.map(product=>{
                    let tmp={productId:product?._id,count:1,price:product?.price}
                    OrderProductList.push(tmp);
                    totalAmount+=eval(product?.price);
                    return <ProductCard key={CartItems._id} product={product}/>
                })
            }
            <div>
                <h3>Total Cart Price</h3>
                <p>Rs.{totalAmount}</p>
            </div>
            </main>
            <form className='my-4 p-2 border-2 border-black'>
                <h2>Delivery Address</h2>
                <div>
                    <h3>Phone Number</h3>
                    <input type="number" onChange={eve=>{setPhone(eve.target.value)}} value={phone} name="phone" id="phone" placeholder='Phone' required/>
                </div>
                <div>
                    <h3>Address Line1</h3>
                    <input type="text" name='addr1' onChange={eve=>{setAddr1(eve.target.value)}} placeholder='door-no, street/area' value={addr1} required/>
                    <h3>Address Line2</h3>
                    <input type="text" name='addr2' onChange={eve=>{setAddr2(eve.target.value)}}  placeholder='colony/village/town' value={addr2} required/>
                    <h3>Address Line3</h3>
                    <input type="text" name='addr3' onChange={eve=>{setAddr3(eve.target.value)}} placeholder='district, state' value={addr3} required/>
                    <h3>PIN code</h3>
                    <input type="number" name='pincode' onChange={eve=>{setPinCode(eve.target.value)}} placeholder='PIN code' value={pincode} required/>
                </div>
                <div>
                    <p>Payment Mode</p>
                    <input type="radio" name="payment" id="payment1" value={transactionId}/>
                    <p>Cash On delivery</p> 
                    <input type="radio" name="payment" id="payment2" value={transactionId}/>
                    <p>Online Payment</p>
                </div>
                <div>
                    <input type="submit" onClick={e=>handleSubmit(e)} className='px-4 py-2 border-1 bg-red-200' value="Place Order" />
                </div>
            </form>
        </section>
    )
}

export default CheckOut