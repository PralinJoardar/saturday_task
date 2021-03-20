import React, { useState } from "react";

function Form() {
  const [main, setMain] = useState([{ input: "", inputChild: [] }]);

  const addSibling = () => {
    setMain([...main, { input: "", inputChild: [] }]);
  };

  const addChild = (child) => {
    setMain();
  };
  return (
    <>
      <button
        onClick={() => {
          addSibling();
        }}
      >
        + Add Sibling
      </button>
      {main.map((value, key) => (
        <div key={key} style={{ display: "inline-flex", paddingLeft: "20px" }}>
          {console.log("value is", value)}
          <div>
            <input type="text" />
            <br />
            <br />
            <div style={{ paddingLeft: "50px", display: "inline" }}>
              {console.log("inputchild", value.inputChild)}
              <button
                onClick={() => {
                  addChild(value.inputChild);
                }}
              >
                + Add Child
              </button>
            </div>
            {value.inputChild.map((value,key)=>(
                <div id={key}>
                    <input type= "text" />
                </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Form;
