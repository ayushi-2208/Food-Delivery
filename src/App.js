
import './App.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import { useEffect, useState } from 'react';
import BannerName from './Components/BannerName';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import {MenuItems, Items} from './Components/Data'
import ItemCard from './Components/ItemCard';
import DebitCard from './Components/DebitCard';
import CartItem from './Components/CartItem';
import { useStateValue } from './Components/StateProvider';

function App() {
  const[rightMenuPop, setrightMenuPop] = useState(false);
  
  const [{cart,total}, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);


  const[isMainData, setMainData] = useState(
    Items.filter((element)=> element.itemId === "buger01")
  );
  

  useEffect(()=>{
          const menuLi = document.querySelectorAll("#menu li");
          
          function setMenuActive(){
            menuLi.forEach((n)=>n.classList.remove("active"));
            this.classList.add("active");
          }

          menuLi.forEach(n=>n.addEventListener('click',setMenuActive))

          const menuCards = document.querySelector(".rowContainer").querySelectorAll(".rowMenuCard");
          
          function setMenuCardActive(){
            menuCards.forEach((n)=>n.classList.remove("active"));
            this.classList.add("active");
          }
          menuCards.forEach(n=>n.addEventListener('click',setMenuCardActive))


  },[isMainData,cart,total, totalPrice]);

  const setData = (itemId) =>{
    setMainData(Items.filter((element)=> element.itemId === itemId));
  }

  return (
    <div className="App">
      <Header/>

      <main>
        <div className='mainContainer'>
          <div className='banner'>
           <BannerName name={"Ayushi"} discount={"20"} link={"#"}/>
           <img src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337' alt='' className='deliveryPic'/>
          </div>
          <div className='dishContainer'>
             <div className='menuCard'>
              <SubMenuContainer name={"Menu Category"}/>
             </div>
             <div className='rowContainer'>
               
               {
                MenuItems && MenuItems.map(data => (
                  <div key={data.id} onClick={()=>setData(data.itemId)}>
                <MenuCard imgSrc={data.imgSrc} name={data.name} isActive = {data.id === 1 ? true : false}/>
              </div>
                ))
               }

              
              
             </div>
             <div className='dishitemContainer'>

                {
                  isMainData && isMainData.map((data)=>(
                    <ItemCard key={data.id} itemId={data.id} imgSrc={data.imgSrc} name={data.name} ratings={data.ratings} price={data.price}/>
                  ))
                }
                
             </div>
          </div>
        </div>
        <div className='rightMenu'>
        {/* <div className={`rightMenu ${setrightMenuPop ? "": 'active'}`} onChange={()=> setrightMenuPop(rightMenuPop)}> */}
          <div className='debitCardContainer'>
            <div className='debitCard'>
              <DebitCard/>
            </div>
          </div>

          {!cart ? <div className="addSomeItem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
            </div> :
          <div className='cartCheckOutContainer'>
            <SubMenuContainer name={"Carts Items"}/>
            <div className='cartContainer'>
              

              <div className='cartItems'>
                {
                  cart && cart.map((data) =>(
                    <CartItem key={data.id} itemId={data.id} name={data.name} imgSrc={data.imgSrc} price={data.price}/>
                  ))
                }
                
              </div>
            </div>
            <div className='totalSection'>
              <h3>Total</h3>
              <p>
                <span>Rs </span>{total}
              </p>
            </div>
            <button className='checkOut'>Check Out</button>
          </div>
           }


          
        </div>
      </main>

      <div className='bottomMenu'>
       <ul id='menu'>
        <MenuContainer link={'#'} icon ={<HomeRoundedIcon/>} isHome />
        <MenuContainer link={'#'} icon ={<ChatIcon/>} />
        <MenuContainer link={'#'} icon ={<AccountBalanceWalletRoundedIcon/>} />
        <MenuContainer link={'#'} icon ={<FavoriteIcon/>} />
        <MenuContainer link={'#'} icon ={<SummarizeRoundedIcon/>} />
        <MenuContainer link={'#'} icon ={<SettingsIcon/>} />

        <div className='indicator'></div>
       </ul>
      </div>
    </div>
  );
}

export default App;
