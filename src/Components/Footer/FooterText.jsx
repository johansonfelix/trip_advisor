import React from "react";

const FooterText = (props) => {
    
  return (
    <div 
      style={{
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        letterSpacing: "-0.5px",
        textDecoration: "underline",
        color: 'white',
      }}
    >
      {props.children}
    </div>
  );
};

export default FooterText;
