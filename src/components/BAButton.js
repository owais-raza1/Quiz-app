import React from "react";

function BAButton({ text, className, onClick }) {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}

export default BAButton;
