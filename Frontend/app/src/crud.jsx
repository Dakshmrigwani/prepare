import React, { useState, useEffect } from "react";

export default function UseEffectVal() {
  const [array, setArray] = useState([]);
  const [data, setData] = useState("");
  const [editingId, setEditingId] = useState(null); // Track the item being edited
  const [editValue, setEditValue] = useState(""); // Track the edit value

  useEffect(() => {
    const storedData = localStorage.getItem("array");
    if (storedData) {
      setArray(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (array.length > 0) {
      localStorage.setItem("array", JSON.stringify(array));
    }
  }, [array]);

  const dataSend = () => {
    if (data.trim()) {
      const newItem = {
        id: Date.now(),
        value: data,
      };
      setArray([...array, newItem]);
      setData("");
    }
  };

  const dataDelete = (id) => {
    const newArray = array.filter((item) => item.id !== id);
    setArray(newArray);
  };

  const startEditing = (id, value) => {
    setEditingId(id);
    setEditValue(value); // Start with the current value of the item
  };

  const updateData = (id) => {
    const updatedArray = array.map((item) =>
      item.id === id ? 
    { ...item, value: editValue }
     : item
    );
    setArray(updatedArray);
    setEditingId(null); // Stop editing after submission
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button onClick={dataSend}>Add</button>
      </div>
      {array.map((item) => (
        <div key={item.id}>
          {editingId === item.id ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={() => updateData(item.id)}>Submit</button>
            </>
          ) : (
            <>
              <h1>{item.value}</h1>
              <button onClick={() => dataDelete(item.id)}>Delete</button>
              <button onClick={() => startEditing(item.id, item.value)}>
                Update
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
}
