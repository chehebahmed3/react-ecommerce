import React, { useContext, useState } from 'react';
import Menu from '../../assets/menu.png';
import { AppContext } from '../../App';

function NavSortByCategory() {
  const [open, setOpen] = useState(false);
  const [itemsFilter] = useContext(AppContext);
  const [filter,setFilter]=useState(itemsFilter);

  // Create a Set to store unique categories
  const uniqueCategories = new Set(itemsFilter.map(user => user.category));
  
const filterProduct=(cat)=>{
  const updatedList=itemsFilter.filter((x)=>x.category===cat);
  setFilter(updatedList);
}
  return (
    <> 
    <a href='#' onClick={() => setOpen(!open)}>
    <img className='menu_image' src={Menu} alt="Menu"></img>
    <p className='menu_text'>Sort By Category</p>
    </a>
      {itemsFilter.length > 0 && (
        <div>
          {open && (
            <div className='dropdown'>
              {/* Map over unique categories and render */}
              {Array.from(uniqueCategories).map(category => (
                <div className='dropdown_item' 
                key={category}>
                  <a className='dropdown_text' key={category} onClick={()=>filterProduct(category)} href='#'>{category}</a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default NavSortByCategory;