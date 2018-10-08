import React from "react";
import "./MyList.css";

const MyList = props => {
  const listItems = props.texts.map(text => <li>{text}</li>);

  return (
    <div className="MyList">
      <ul>{listItems}</ul>
    </div>
  );
};

export default MyList;
