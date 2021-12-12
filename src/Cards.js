import { useEffect,useState } from 'react';


function Cards() {
    useEffect(() => {
        fetchProducts()
    }, [])
    let products;
    let element;
    const fetchProducts=async ()=>{
        products=await fetch('https://fakestoreapi.com/products').then(res=>res.json());
        element= products.map(product=>{
            return(
                <div className="main">
    <ul className="cards">
        <li className="cards_item">
        <div className="card">
            <div className="card_image"><img src={product.image}/></div>
            <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button className="btn card_btn">Add To Cart</button>
            </div>
        </div>
        </li>
        <li className="cards_item">
        <div className="card">
            <div className="card_image"><img src="https://picsum.photos/500/300/?image=5"/></div>
            <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button className="btn card_btn">Add To Cart</button>
            </div>
        </div>
        </li>
        <li className="cards_item">
        <div className="card">
            <div className="card_image"><img src="https://picsum.photos/500/300/?image=11"/></div>
            <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button className="btn card_btn">Add To Cart</button>
            </div>
        </div>
        </li>
        <li className="cards_item">
        <div className="card">
            <div className="card_image"><img src="https://picsum.photos/500/300/?image=14"/></div>
            <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button className="btn card_btn">Add To Cart</button>
            </div>
        </div>
        </li>
        <li className="cards_item">
        <div className="card">
            <div className="card_image"><img src="https://picsum.photos/500/300/?image=17"/></div>
            <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button className="btn card_btn">Add To Cart</button>
            </div>
        </div>
        </li>
        <li className="cards_item">
        <div className="card">
            <div className="card_image"><img src="https://picsum.photos/500/300/?image=2"/></div>
            <div className="card_content">
            <h2 className="card_title">Card Grid Layout</h2>
            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button className="btn card_btn">Add To Cart</button>
            </div>
        </div>
        </li>
    </ul>
</div>
            )
        })
        console.log(products)
    }
    return (
        <div>{element}</div>
        

    );
    }

export default Cards;
