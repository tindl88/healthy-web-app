'use client';

import React, { useEffect, useState } from 'react';

import IconArrowUp from '@/components/icons/arrow-up';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-to-top fixed bottom-12 right-12">
      {isVisible && (
        <button onClick={scrollToTop}>
          <IconArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
