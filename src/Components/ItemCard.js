import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AddIcon from '@mui/icons-material/Add';
import { Items } from './Data';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';
let cartData = [];

const ItemCard = ({imgSrc, name, ratings, price,itemId}) => {

    const[isFavourite, setFavourite] = useState(false);
    const[currentValue, setCurrentValue] = useState(Math.floor(ratings));

    const[isCart, setCart] = useState(null);
    const[{},dispatch] = useStateValue();


    useEffect(() => {
           if(isCart){
             cartData.push(isCart);
             dispatch({
              type: actionType.SET_CART,
              cart: cartData,
             })
           }
    },[isCart])

    const handleClick = (value)=>{
       setCurrentValue(value);
    }


  return (
    <div className='itemCard' id={itemId}>
      <div className={`isfavourite ${isFavourite ? 'active': ""}`} onClick={()=> setFavourite(!isFavourite)}>
       <FavoriteIcon/>
      </div>

      <div className='imgBox'>
        <img src={imgSrc} alt='' className='itemImg'/>
      </div>
      <div className='itemContent'>
        <h3 className='itemName'>{name}</h3>
        <div className='bottom'>
            <div className='ratings'>
                {Array.apply(null,{length : 5}).map((e,i)=>(
                    <i key={i} className={`rating ${currentValue > i ? "orange" : "gray"}`} onClick={()=> handleClick(i+1)}>
                     <StarRoundedIcon/>
                    </i>
                ))}
                <h3 className='price'><span>Rs </span>{price}</h3>
            </div>
            <i className='addtoCart' onClick={()=> setCart(Items.find((n)=> n.id === itemId))}>
                <AddIcon/>
            </i>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
