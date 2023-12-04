const cart=[];

const  handleCart=(state=cart,action)=>{
        const product=action.payload;
        switch(action.type){
            case "ADDITEM":
                const exist =state.find((x)=>x.id===product.id);
                if(exist){
                    //to increase the quatity
                    return state.map((x)=>x.id===product.id?{...x,qty:x.qty+1}:x
                    )
                }else{
                    const product=action.payload;
                    return[
                        ...state,
                        {
                          ...product,
                          qty:1,
                        }
                    ]
                }
                break;
                case "DELITEM": 
                const itemToRemove = state.find(item => item.id === action.payload.id);
                return state.filter(item => item.id !== itemToRemove.id);
                break;
                case 'INCREMENT_ITEM':
                    return state.map(item => {
                      if(item.id === action.payload.id) {
                        return {
                          ...item,
                          
                          qty: item.qty + 1 
                        }
                      } else {
                        return item;  
                      }
                    })
                    

                    case 'DECREMENT_ITEM':
     return state.map(item => {
       if(item.id === action.payload.id) {
         return {
           ...item,
           qty: item.qty - 1
         }
       } else {
        return item;
       }  
     })
                
               
               
    
                    default:
                        return state;
                        break;
        }
}
export default handleCart 