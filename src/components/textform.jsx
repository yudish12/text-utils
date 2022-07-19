import React from 'react';
function Textform(){
    const [text,setText] = React.useState('Enter Text Here');
    
    const Uppercase=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    }

    const Lowercase=()=>{
      let Text = text.toLowerCase();
      setText(Text);
      }

    const handleChange = (e)=>{
    setText(e.target.value);
    }

    const Clear =()=>{
     setText('');
    }

    const Copy = ()=>{
      const myinp = document.querySelector("#exampleFormControlTextarea1")
      myinp.select();
      document.execCommand("Copy");
    }

    const arr = text.split(" ");

    return(
        <>
<div className="mb-3 container mt-5">
  <label htmlFor="exampleFormControlTextarea1" className="form-label display-5" >Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={handleChange} value={text}></textarea>
  <button className='btn btn-primary mt-4' onClick={Uppercase}>Convert to Uppercase</button>
  <button className='btn btn-primary mt-4 mx-4' onClick={Lowercase}>Convert to Lowercase</button>
  <button className='btn btn-primary mt-4' onClick={Clear}>Clear Text</button>
  <button className='btn btn-primary mt-4 mx-4' onClick={Copy}>Copy Text</button>
</div>
<div className="container my-3">
 <h3>Your Text Summarry</h3>
 <p>{text.length} number of characters and {arr.length} words</p>
 <p></p>
</div>
</>
    );
}

export default Textform;