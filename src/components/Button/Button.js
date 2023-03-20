import React from "react";

const Button = ({
  textColor = "text-white-100",
  children,
  paddingY,
  width = "w-28 xl:w-40",
  fontWeight = "font-normal",
}) => {
  return (
    <button
      className={`bg-blue-100 rounded-lg  ${paddingY} ${width} text-center ${textColor} text-sm xl:text-base ${fontWeight}`}
    >
      {children}
    </button>
  );
};

export default Button;
