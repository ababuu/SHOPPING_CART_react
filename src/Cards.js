import React from 'react';
import Popup from 'reactjs-popup';
import { useEffect,useState } from 'react';
import cartImage from './cart.png'
import NumericInput from 'react-numeric-input';

function Cards() {
    const [products,setProducts]=useState([]);
    const [cart, setCart] = useState([]);
    const [showCart,setShowCart]=useState(false);
    const [total,setTotal]=useState(0);
    const [quantity,setquantity]=useState(1);

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(()=>{
        totalPrice()
    },[cart]);

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
            <input className='delete-btn' type="submit" value="remove"  onClick={()=>removeFromCart(el)}/>
        </div>
    ));

    const totalPrice=()=>{
        let totalVal=0;
        for(let i=0 ; i<cart.length; i++){
            totalVal+=cart[i].price;
        }
        setTotal(totalVal);
    }
    
    const cartContent= cartItems.length;
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: .5
            }}
        />
    );
    return (
        <div className='main'>
            <br></br>
            <div onClick={()=>setShowCart(true)}><img className='cartImage' src={cartImage}/><h3 className='cartContent'>{cartContent}</h3></div>
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
        <div id="cart-header">
            <span id="cart-title">Shopping Cart</span>
        </div>
        <div>
        {cart.map((item) => (
            <div>
                <th key={item.id}>
                <td><img className='cart_image' src={item.image}/></td>
                <td>{item.title} </td>
                <div><td>Price: ${item.price}</td></div>
            <div><td>Quantity: <input type='number' onInput={e=>setquantity(e.target.value)} min="1" max="9" step="1" /></td></div>
            </th>
            <ColoredLine color="gray" />
            </div>
        ))}
        </div>
        <div>
        </div>
            <h1 className='total'>Total: ${quantity * total}</h1>
            <button className='close-btn' onClick={()=>setShowCart(false)}></button>
        </div>
        </div> : null}
        </div>
        
    );
        }
export default Cards;
