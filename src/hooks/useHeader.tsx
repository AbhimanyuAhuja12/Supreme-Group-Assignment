import { useEffect, useState } from "react";

export const useHeader =()=>{
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible( (prevScrollPos > currentScrollPos) || currentScrollPos < 10 );
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);


    return { visible };
}