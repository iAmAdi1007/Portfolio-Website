import React, { useCallback, useEffect } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { RiSuitcaseLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react';

const Nav = ({ sectionRefs }) => {
  const [active, setActive] = useState('HOME');

  const handleActivate = (val) => {
    setActive(val);
    scrollTo(val);
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

  const filteredRef= useCallback((value) => {
    return sectionRefs.filter(section => section.title === value)[0]
  },[sectionRefs])

  const scrollToView = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 300)
  }

  const scrollTo = (value = "HOME") => {
    const selectedRef = filteredRef(value);
    scrollToView(selectedRef.ref);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for(const {title, ref} of sectionRefs){
        if(ref.current){
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (active !== title) {
              setActive(title);
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[NAV_ITEMS, sectionRefs])

  return (
    <nav>
      {NAV_ITEMS.map((navItem, index) => {
        return <button onClick={() => handleActivate(navItem.navValue)} key={index} className={`${active === navItem.navValue ? 'active' : ''}`}>{navItem.icon}</button>
      })}
    </nav>
  )
}

export default Nav