import useFetch from '../hooks/useFetch';
import { domain_url,myorders_url} from '../utils/index';

const Orders=()=>{
    const ordersList=useFetch(domain_url+myorders_url);
    return (!ordersList)? <div>Shimmer UI</div>: (
        <section>
            <h2>My Orders</h2>
            <article>
                {
                    ordersList.map(order=>{
                        return <div>Order Card goes here</div>
                    })
                }
            </article>
        </section>
    )
}

export default Orders