import React from 'react'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const MenuCard = ({imgSrc, name, isActive}) => {
  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
      <div className='imgBox'>
        <img src={imgSrc} alt=''/>
      </div>
      <h3>{name}</h3>
      <i className='loadMenu'>
        <ChevronRightRoundedIcon/>
      </i>
    </div>
  )
}

export default MenuCard
