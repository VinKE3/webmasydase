"use client";

import { useEffect, useState } from "react";
import MobileHeader from "./HeaderMobile";
import Header from "./Header";

const MainHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileHeader /> : <Header />;
};

export default MainHeader;
