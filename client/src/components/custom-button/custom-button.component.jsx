import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  cover,
  ...otherProps
}) => (
  <button
    className={`
    ${isGoogleSignIn ? "google-sign-in" : " "} 
    ${inverted ? "inverted" : " "} 
    ${cover ? "cover" : " "}
    custom-button
    `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
