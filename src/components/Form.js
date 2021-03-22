import React, { useState } from "react";
function Form() {
  const [main, setMain] = useState([
    {
      parentId: 1,
      parentValue: "",
      child: [],
    },
  ]);
  console.log("main state: ", main);
  let parentLen = main.length;

  const addSibling = () => {
    setMain([...main, { parentId: parentLen + 1, parentValue: "", child: [] }]);
  };
  const addChild = (index) => {
    let childLen = main[index].child.length;
    var currentChild = [...main];
    currentChild[index].child.push({childId: childLen+1, childValue:""});
    setMain(currentChild);
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
      {main.map((parent, index) => (
        <div
          key={index}
          style={{ display: "inline-flex", paddingLeft: "20px" }}
        >
          <div>
            <input
              type="text"
              onChange={(e) =>
                setMain([...main], [(main[index].parentValue = e.target.value)])
              }
            />
            <br />
            <br />
            <div style={{ paddingLeft: "50px", display: "inline" }}>
              <button
                onClick={() => {
                  addChild(index);
                }}
              >
                + Add Child
              </button>
              <br />
              {parent.child.map((value, childKey) => (
                <div key={childKey}>
                  <br />
                  <input
                    onChange={(e) =>
                      setMain(
                        [...main],
                        [(main[index].child[childKey].childValue = e.target.value)]
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Form;
