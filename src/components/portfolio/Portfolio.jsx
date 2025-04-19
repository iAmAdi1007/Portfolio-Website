import React, { useEffect, useMemo, useRef, useState } from 'react'
import './portfolio.css';
import { GoDotFill } from "react-icons/go";
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Portfolio = React.forwardRef((_, ref) => {
  const [visibleItems, setVisibleItems] = useState({});
  const listRef = useRef(null);
  const PROJECT_WORK = useMemo(() => [
    {
      title: 'For VERIZON',
      items: [
        'Worked on Page load optimization through Indexed DB approach to cater to multiple device load on the screen to improved user experience.',
        'Worked pro actively with Backend Team in API design discussion and contract finalization to ensure reduced page load times as well as secured endpoints.',
        'Worked on improving SRE(Site Reliability Engineering) score for the application through Next JS SSR(Server-Side Rendering) capabilities.'
      ]
    },
    {
      title: 'For APPLE',
      items: [
        'Developed and implemented dynamic forms for the application, ensuring alignment with both business and technical requirements.',
        'Developed real time change of Feature Flags through dev tools to test various retailers on-the-go.'
      ]
    }
  ], []);

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

    const handleIntersection = (entries, observer) => {
      console.log('Observer callback triggered:', entries);
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
              }, index * 800);
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
                <>
                  <div className='client__container'>
                    <BsFillPatchCheckFill className='client__icon' />
                    <h4>{group.title}</h4>
                  </div>
                  {group.items.map((item, itemIndex) => {
                    return (
                      <div className={`project__work__container fade-in-item ${visibleItems[groupIndex] && visibleItems[groupIndex].includes(item) ? 'fade-in' : ''}`} key={itemIndex}>
                        <GoDotFill className='client__icon' />
                        <small>{item}</small>
                      </div>
                    )
                  })}
                </>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
});

export default Portfolio