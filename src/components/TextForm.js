import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handlerOnChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };

  const handlerOnClickUp = (e) => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlerOnClickLow = (e) => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  return (
    <>
      <div className="container my-3">
        <h2>{props.heading}</h2>
        <textarea
          placeholder="Enter Text Here"
          id="myText"
          rows="10"
          className="container-fluid"
          value={text}
          onChange={handlerOnChange}
        ></textarea>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handlerOnClickUp}
        >
          Change to UpperCase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handlerOnClickLow}
        >
          Change to LowerCase
        </button>
        <div>
          <h3>Text Summery</h3>
          <p>
            {text.split(" ").length - 1} words and {text.length} characters
          </p>
          <h4>Preview</h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
