import React from 'react';
import Popup from 'reactjs-popup';
import { useEffect,useState } from 'react';
import cartImage from './cart.png'

function Cards() {
    const [products,setProducts]=useState([]);
    const [cart, setCart] = useState([]);
    const [showCart,setShowCart]=useState(false);
    useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts=async ()=>{
        let fetchedProducts=await fetch('https://fakestoreapi.com/products').then(res=>res.json());
        setProducts(fetchedProducts);
    }
    const addToCart=(el)=>{
        setCart([...cart,el]);
    }
    const removeFromCart=(el)=>{
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
    }
    const cartItems = cart.map((el) => (
        <div className='cart_items' key={el.id}>
            <img className='cart_image' src={el.image}></img>
            {`${el.title}: $${el.price}`}
            <input type="submit" value="remove"  onClick={()=>removeFromCart(el)}/>
        </div>
    ));
    
    return (
        <div className='main'>
            <div onClick={()=>setShowCart(true)}><img className='cartImage' src={cartImage}/></div>
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
                            <button id={product.id} onClick={()=>addToCart(product)} className="btn card_btn">Add To Cart</button>
                            </div>
                        </div>
                    </li>
                    )
                    
        })}
        </ul>
        {showCart ? <div className='popup-wrapper'>
        <div className='popup'>
          {cartItems}
        <button className='close-btn' onClick={()=>setShowCart(false)}></button>
        </div>
      </div> : null}
        </div>
        
    );
    }

export default Cards;
