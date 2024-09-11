import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();

    setText(newText)
    props.showalert("Converted to Uppercase","success")
  }
  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();

    setText(newText)
    props.showalert("Converted to Lowercase","success")
  }
  const handleClearClick = () => {
    let newText = ""
    setText(newText)
    props.showalert("Text cleared","success")
  }
  const handleCopyClick = () => {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showalert("Text Copied!","success")
  }
  const handleOnChange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showalert("Extra space removed!","success")
  }
  const [text, setText] = useState('Enter the text here');
  // setText("New Text");
  return (  
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 >{props.heading}</h1>
    <div className="mb-3">  
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#212529':'white' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>

      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{ text.length>0?text:"Enter something"}</p>
    </div>
      </>
  )
}
