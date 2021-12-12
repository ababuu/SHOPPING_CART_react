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
                
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image"><img alt='' src={product.image}/></div>
                            <div className="card_content">
                            <h2 className="card_title">Card Grid Layout</h2>
                            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
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
