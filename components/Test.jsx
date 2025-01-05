"use client";
import { useReducer } from "react";
import Form from "./Form";
import { namesReducer } from "@/utils/namesReducer";

function Test() {
  const [names, dispatch] = useReducer(namesReducer, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Form to add names */}
      <Form
        onAdd={(name) => dispatch({ type: "ADD", payload: name })}
        onSort={() => dispatch({ type: "SORT" })}
        onOrder={() => dispatch({ type: "ORDER" })}
      />

      {/* Display the names */}
      {names.map((nameObj) => (
        <div
          key={nameObj.id}
          className="flex gap-2 items-center border border-black/50 rounded-lg px-2 py-1"
        >
          <p>{nameObj.text}</p>
          <p className="text-green-800">{nameObj.likes}</p>

          <button
            onClick={() => dispatch({ type: "DISLIKE", payload: nameObj.id })}
          >
            👎
          </button>
          <button
            onClick={() => dispatch({ type: "LIKE", payload: nameObj.id })}
          >
            👍
          </button>

          <button
            className="bg-red-400 btn"
            onClick={() => dispatch({ type: "DELETE", payload: nameObj.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Test;