import './App.css';
import { createContext, useEffect, useState } from 'react';
import Products from './components/products/Products';
import NavBar from './components/navbar/NavBar';
import NavBarBottom from './components/navbar/NavBarBottom.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from './components/about/AboutScreen.js';
import Product from './components/products/Product.jsx';
import {Provider} from 'react-redux';
import store from './redux/store';
import Cart from './components/cart/Cart.js';
import Footer from './components/footer/Footer.js';
import Login from './components/login/Login.js';
export const AppContext=createContext();
function App() {
  //create the use context
  const [app,setApp]=useState([]);
  //this use state is used for the search bar
  const [appSearch,setAppSearch]=useState("");
  //this use state is used for filtering the category 
  const [selectedCategory, setSelectedCategory] = useState(null);
  //this state is for the add data to the cart
  const [addedItems, setAddedItem] = useState([]);
  //this function is used tyo fetch the data from the fakestoreapi
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [cart, setCart] = useState([]);

  let componentMounted=true;

  const [filter,setFilter]=useState(app);

  const [loading,setLoading]=useState(false);
  useEffect(
    ()=>{
      const getProducts=async()=>{
        setLoading(true);
        const response=await fetch("https://fakestoreapi.com/products");
        if(componentMounted){
          setApp(await response.clone().json());
          setFilter(await response.json());
          setLoading(false);
        }
        return()=>{
          componentMounted=false;
        }
      }
      getProducts();
    },[]
  );

  //this function is used for the search on the products
  const changingSrarchData = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = app.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setApp(filteredProducts);
    setAppSearch(searchTerm);
  };
  
  const itmesFilter = app.filter((item) =>
    item.title.toLowerCase().includes(appSearch.toLowerCase())
  );
    
 // Function to add items to the cart
 const  addItemToCart = (item) => {
  setCart((prevCart) => [...prevCart, item]);
}
  return (
    <BrowserRouter>
    <Provider store={store}>
    <AppContext.Provider value={[app,itmesFilter,appSearch,changingSrarchData,selectedCategory,setSelectedCategory,filter,setFilter,loading,setLoading,addItemToCart,cart, setCart]}>
    <div className="body_container">
    <NavBar/>
    <NavBarBottom/>
    <Routes>
    <Route path='/' element={<Products/>} />
    <Route path='login' element={<Login/>}></Route>
    <Route path='about' element={<AboutScreen/>}/>
    <Route path='product/:id' element={<Product/>}/>
    <Route path='cart' element={<Cart/>} />
    </Routes>
    <Footer/>
    </div>
    </AppContext.Provider>
    </Provider>
    </BrowserRouter>

  );
}

export default App;