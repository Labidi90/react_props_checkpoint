import React from "react";

const FullName = (props, children) => {
  console.log(children);
  const handleClick = (e) => {
    e.preventDefault();
    alert(FullName);
  };

  return (
    <div style={{}}>
      <a href="#!" onClick={handleClick}>
        <h1>Name :</h1>
        {props.Name}
      </a>
    </div>
  );
};

export default FullName;
