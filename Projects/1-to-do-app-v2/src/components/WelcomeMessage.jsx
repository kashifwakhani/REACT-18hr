import React from "react";

const WelcomeMessage = ({ todoItem }) => {
  return <>{todoItem.length === 0 && <p>Enjoy your Day</p>}</>;
};

export default WelcomeMessage;
