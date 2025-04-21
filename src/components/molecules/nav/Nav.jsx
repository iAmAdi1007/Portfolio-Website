import React from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { RiSuitcaseLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react';

const Nav = ({ scrollToComponent }) => {
  const [active, setActive] = useState('HOME');
  const handleActivate = (val) => {
    setActive(val);
    scrollToComponent(val);
  }

  const NAV_ITEMS = [
    {
      navValue: 'HOME',
      icon: <AiOutlineHome />
    },
    {
      navValue: 'ABOUT',
      icon: <AiOutlineUser />
    },
    {
      navValue: 'EXPERIENCE',
      icon: <BsJournalBookmarkFill />
    },
    {
      navValue: 'PORTFOLIO',
      icon: <RiSuitcaseLine />
    },
    {
      navValue: 'CONTACT',
      icon: <BiMessageSquareDetail />
    }
  ]
  return (
    <nav>
      {NAV_ITEMS.map((navItem, index) => {
        return <button onClick={() => handleActivate(navItem.navValue)} key={index} className={`${active === navItem.navValue ? 'active' : ''}`}>{navItem.icon}</button>
      })}
    </nav>
  )
}

export default Nav