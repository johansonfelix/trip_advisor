import React from "react";

const FooterLinks = (props) => {
    
  return (
    <div 
      style={{
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "16px",
        color: 'white',
      }}
    >
      {props.children}
    </div>
  );
};

export default FooterLinks;
