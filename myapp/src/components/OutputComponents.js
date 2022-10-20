import React from "react";

export default function OutputComponents(props) {
  return (
    <div className="output-component">
      <div className="output-display">
        <p>{props.name}</p>
        <p>{props.cost}</p>
      </div>
      <span onClick={props.delete} className="material-symbols-sharp">
delete
</span>
    </div>
  );
}
