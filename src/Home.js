import Nav from "./Nav";
import Cards from "./Cards";
import { useEffect,useState } from 'react';
import { Navigate } from 'react-router-dom';

function Home() {
    const [show, setshow] = useState(false);
    const handleClick=()=>{
        setshow(true);
    }
    
    return (
        <div className="home">
            <Nav/>
            {!show && <div>
                <h1 style={{padding:'10px', fontSize:'50px'}}>Welcome to FakeStore.com, Browse through our catalog and shop what catches your eyes.</h1>
                    <button onClick={handleClick} style={{padding:'15px',cursor:'pointer', display:'inline-block', marginLeft:'50%', borderRadius:'10px', marginRight:'50%' ,background:'lightGray'}}>Products</button></div>}
            {show && <Navigate to='/products'/>}
            
        </div>
    );
    }

export default Home;
