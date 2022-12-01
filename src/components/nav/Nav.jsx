import React from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BsJournalBookmarkFill} from 'react-icons/bs';
import {RiSuitcaseLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react';

const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a href="#" onClick={()=> setActive('#')} className={active === "#" ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActive('#about')} className={active === "#about" ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActive('#experience')} className={active === "#experience" ? 'active' : ''}><BsJournalBookmarkFill/></a>
      <a href="#portfolio"><RiSuitcaseLine/></a>
      <a href="#contact" onClick={()=> setActive('#contact')} className={active === "#contact" ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav