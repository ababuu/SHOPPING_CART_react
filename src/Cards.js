import { useEffect,useState } from 'react';


function Cards() {
    const [products,setProducts]=useState([])
    useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts=async ()=>{
        let fetchedProducts=await fetch('https://fakestoreapi.com/products').then(res=>res.json());
        setProducts(fetchedProducts);
        
    }
    console.log(products)
    return (
        <div className='main'>
            <ul className='cards'>
            {products.map((product)=>{
            return (
                <li key={product.id} className="cards_item">
                        <div className="card">
                            <div className="card_image"><img alt='' src={product.image}/></div>
                            <div className="card_content">
                            <h2 className="card_title">{product.title}</h2>
                            <p className="card_text">{product.description}</p>
                            <h3 className="card_title">{product.price}$</h3>
                            <button className="btn card_btn">Add To Cart</button>
                            </div>
                        </div>
                    </li>)
        })}
        </ul>
        </div>
        
    );
    }

export default Cards;
