export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

export const  delCart=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}
export function incrementItem(itemId) {
    return {
      type: 'INCREMENT_ITEM',
      payload: {
        id: itemId
      }
    }
  }
  export function decrementItem(itemId) {
    return {
       type: 'DECREMENT_ITEM',
       payload: {
         id: itemId  
       }
    }
  }
    