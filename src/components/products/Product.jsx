import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addCart } from '../../redux/action';

function Product() {
    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const[loading,setLoading]=useState(false);

    const dispatch=useDispatch();
    const addProduct=(product)=>{
        dispatch(addCart(product));
    }
   useEffect(
    ()=>{
       const getProduct=async()=>{
        setLoading(true);
        const response=await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false);
       }
       getProduct();
    },[]
   );
  
 
  return (
    
    <div className='product_container'>
    <div className='product_subcontainer'>
    <img src={product.image} alt={product.title} className='product_image'></img>
    </div>
    <div>
    
    <h3 className='product_text_price'>${product.price}</h3>
    <p className='product_text_ratings'>Rating {product.rating && product.rating.rate}
        </p>
        <h1 className='product_text_title'>{product.title}</h1>
        <p className='product_text_description'>{product.description}</p>
        <h4 className='product_text_category'>
        {product.category}
        </h4>
        <button className='product_text_button' onClick={()=>addProduct(product)}>Add To Cart</button>
        <Link to="/cart" className='product_text_NavLink'>Go to Cart</Link>
    </div>
    </div>
  )
}

export default Product