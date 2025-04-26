import React, { useEffect, useRef, useState } from 'react'
import './portfolio.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import data from '../../../data.json';

const Portfolio = React.forwardRef((_, ref) => {
  const [visibleItems, setVisibleItems] = useState({});
  const listRef = useRef(null);
  const PROJECT_WORK = data.projectWork;

  const combinedRef = ref || listRef;

  useEffect(() => {

    if (!combinedRef.current) {
      console.error('Ref is not available');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let timeouts = [];
          PROJECT_WORK.forEach((group, groupIndex) => {
            group.items.forEach((item, index) => {
              const timeoutId = setTimeout(() => {
                setVisibleItems((prev) => ({
                  ...prev,
                  [groupIndex]: [...(prev[groupIndex] || []), item],
                }));
              }, index * 900);
              timeouts.push(timeoutId);
            });
          });

          return () => timeouts.forEach(clearTimeout);
        }
      })
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (combinedRef.current) {
      observer.observe(combinedRef.current);
    }

    return () => {
      if (combinedRef.current) {
        observer.unobserve(combinedRef.current);
      }
    };

  }, [PROJECT_WORK, combinedRef])
  return (
    <section id="portfolio" ref={combinedRef}>
      <h5>My Recent Work</h5>
      <h2>Experience</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            {PROJECT_WORK.map((group, groupIndex) => {
              return (
                <div key={`${group}-${groupIndex}`}>
                  <div className='client__container'>
                    <BsFillPatchCheckFill className='client__icon' />
                    <h4>{group.title}</h4>
                  </div>
                  {group.items.map((item, itemIndex) => {
                    return (
                      <div className={`project__work__container fade-in-item ${visibleItems[groupIndex] && visibleItems[groupIndex].includes(item) ? 'fade-in' : ''}`} key={itemIndex}>
                        <small className='project__text'>{item}</small>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
});

export default Portfolio