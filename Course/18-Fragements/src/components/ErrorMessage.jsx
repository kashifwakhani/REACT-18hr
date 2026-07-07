import React from "react";

const ErrorMessage = ({ items }) => {
  return <>{items.length == 0 && <h1>Im feeling hungry</h1>}</>;
};

export default ErrorMessage;
