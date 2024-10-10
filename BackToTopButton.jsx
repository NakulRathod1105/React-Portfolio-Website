import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button className="rounded-circle mx-0 p-0"
      onClick={scrollToTop}
      style={{
        display: visible ? "block" : "none",
        position: "fixed",
        bottom: "50px",
        right: "30px",
        backgroundColor: "steelblue", 
        color: "white",
        border: "none",
        cursor: "pointer",
  
        transition: "transform 0.3s ease, background-color 0.3s ease",
        zIndex: 1000,
      }}
    >
      <i
        className="fas fa-arrow-alt-circle-up"
        style={{ fontSize: "30px" }}
      ></i>
     
    </button>
  );
};

export default BackToTopButton;
