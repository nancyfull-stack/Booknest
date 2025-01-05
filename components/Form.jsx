import { useState } from "react";

function Form({ onSort, onAdd, onOrder }) {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    if (inputVal.trim() === "") return; // Check if input is empty

    onAdd(inputVal); // Update state

    setInputVal(""); // Empty the input field
  };

  return (
    <form className="flex gap-1 items-center mb-10" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="test"
        className="border px-2 py-1"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className="bg-orange-500 btn" type="button" onClick={onSort}>
        Sort
      </button>
      <button className="bg-green-500 btn" type="button" onClick={onOrder}>
        Order
      </button>
      <button className="bg-blue-500 btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;