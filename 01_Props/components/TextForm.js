import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppdercase was clicked" + text);
        let newText = text.toUpperCase();
        settext(newText);
    }
    
    const handleLwClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        settext(newText);
    }
    
    const handleOnChange = (event)=>{
        console.log("On change");
        settext(event.target.value);
    }


    const[text, settext] =useState("");
    // text = "text" //wrong way to change the state
    // settext("abcdefgh"); //correct way to change the state
    return (
        <React.Fragment>
        <div>
            <h1> {props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to uppercase</button>
            <button className="btn btn-primary" onClick={handleLwClick} >Convert to lowercase</button>
            <p> {settext}</p>
        </div>

        <div className="container my-5">
            <h1>Summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
        </div>
        </React.Fragment>
    )

}
