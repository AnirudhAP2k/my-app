export default function about(props) {
  let myStyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "#033073",
    border: "1px solid",
    borderColor: props.mode === "light" ? "black" : "white",
  };
  return (
    <div className="container">
      <h1 className={`my-3 text-${props.mode === "light" ? "black" : "white"}`}>
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item  ">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or total reading
              time.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.TextUtils
              reports the number of words and characters. Thus it is sitble for
              writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This TextUtil web application works on any web browser both on
              desktop and mobile such as Google Chrome, Firefox, Internet
              Explorer, Safari, Opera etc. It suits to count character in
              facebook, blogs, books, excel document, essays etc. It also haas mutiple
              functionalities such as to convert all words into small to capital
              or vice versa and to enable a speech of the text via browser
              speech model.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
