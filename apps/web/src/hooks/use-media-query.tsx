import { useState, useEffect } from "react";

export const useMediaQuery = (width: number) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMatch(window.innerWidth > width);
    };

    handleResize(); // Run on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isMatch;
};
