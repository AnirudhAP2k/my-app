import React, { useState } from "react";

export default function TextForms(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking", "success");
  };

  const clear = () => {
    setText("");
   props.showAlert("Textarea Cleared", "success");
  };

  const [text, setText] = useState("");

  return (
    <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }} >
      <h1>
        {props.heading}
      </h1>

      <div className="mb-3">
        <textarea
          className="form-control"
          style={{ backgroundColor: props.mode === "dark" ? "#033073" : "white", color:props.mode === "dark" ? "white" : "black" }}
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      <button
      disabled = {text.length === 0}
        className="btn btn-primary mx-2 my-2"
        onClick={handleUpClick}
      >
        Convert to UpperCase
      </button>

      <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
        Convert to LowerCase
      </button>

      <button
      disabled = {text.length === 0}
        className="btn btn-primary mx-2 my-2"
        onClick={clear}
      >
        Clear Text
      </button>

      <button disabled = {text.length === 0} className="btn btn-danger mx-2 my-2" onClick={speak}>
        Speak{" "}
      </button>
      
      <div className="my-4">
        <h1>Text Summaary</h1>
        <p>
          {text.split(" ").length-1} words and {text.length} characters
        </p>
        <h4>Reading Time</h4>
        <p>{text ? 0.08 * (text.split(" ").length-1) : 0} sec </p>
        <h2>Preview</h2>
        <p className="my-2">{text.length>0?text:"Enter the text (Nothing to Preview)"}</p>
      </div>
    </div>
  );
}
