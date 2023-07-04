import useFetch from '../hooks/useFetch';
import { domain_url,myorders_url} from '../utils/index';

const Orders=()=>{
    const data=useFetch(domain_url+myorders_url);
    const ordersList=data?.allOrders

    return (!ordersList)? <div>Shimmer UI</div>: (
        <section>
            <h2>My Orders</h2>
            <article>
                {
                    ordersList.map(order=>{
                        return (<article className='my-2 p-4 border-2 text-green-800'>
                            <div><p>Order Id: {order?._id}</p></div>
                            <p>Ordered On : {order.createdAt}</p>
                            <p>Delivery Address : {order?.address}</p>
                            <p>No. of products : {order?.product.length}</p>
                            <p>Order Status : {order?.status}</p>
                            <p>Total cost : {order.amount}</p>
                            <p>Transaction ID : {order?.transactionId}</p>
                            <div>
                                <button className='text-[12px]'>More Details</button>
                            </div>
                        </article>)
                    })
                }
            </article>
        </section>
    )
}

export default Orders