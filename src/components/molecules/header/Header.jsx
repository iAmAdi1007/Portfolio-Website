import React, { useEffect, useState } from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import data from '../../../data.json';

const Header = React.forwardRef((_, ref) => {
  const {userName : USER_NAME, professionTexts: PROFESSION_ARRAY} = data;
  const [index, setIndex] = useState(0);
  const [name, setName] = useState('');
  const [professionValue, setProfessionValue] = useState('');
  const [isTitleRendered, setIsTitleRendered] = useState(false);
  const [professionIndex, setProfessionIndex] = useState(0);
  const [professionLetterIndex, setProfessionLetterIndex] = useState(0);

  useEffect(() => {
    if (index < USER_NAME.length) {
      const intervalId = setInterval(() => {
        setName(prev => prev + USER_NAME[index]);
        setIndex(index + 1);
      }, 100)

      return () => clearInterval(intervalId);
    }else{
      const delayId = setTimeout(() => {
        setIsTitleRendered(true);
      }, 400)

      return () => clearTimeout(delayId);
    }
  },[index, USER_NAME, PROFESSION_ARRAY]);

  useEffect(() => {
    if(!isTitleRendered || professionIndex >= PROFESSION_ARRAY.length) return;

    const currentWord = PROFESSION_ARRAY[professionIndex];
    if(professionLetterIndex < currentWord.length){
      const id = setInterval(() => {
        setProfessionValue(prev => prev + currentWord[professionLetterIndex]);
        setProfessionLetterIndex(professionLetterIndex + 1);
      }, 100)

      return () => clearInterval(id);
    }else{
      const timeout = setTimeout(() => {
        setProfessionValue('');
        setProfessionLetterIndex(0);
        setProfessionIndex(prev => {
          if(prev === PROFESSION_ARRAY.length - 1){
            return 0
          }else{
            return prev + 1;
          }
        })
      }, 400)

      return () => clearTimeout(timeout);
    }

  },[isTitleRendered, professionLetterIndex, professionIndex, PROFESSION_ARRAY])



  return (
    <header ref={ref}>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1 className='username'>{name} <span className='cursor__animation' /></h1>
        <h3 className='text-light' style={{height: '2rem'}}>{professionValue}</h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
});

export default Header