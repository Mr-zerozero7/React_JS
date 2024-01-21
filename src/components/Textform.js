import React, {useState}from 'react'
// useState is like a state but we use only in functional component. import mandatory

export default function Textform(props) {  
                                                //  props passed from App.js 
    // when we use the onChange handler must use event. when we type the text for input it will be render event by event
    const handleOnChange = (event) => {
        // console.log('on change handle fired')
        setText(event.target.value)         // update the text event by setText for value use this event.target.value
    }

    const handleUpClick =() => {
        // console.log('Convert button clicked')
        let newText = text.toUpperCase()        // access the text variable and modify the required properties and store in a new variable or update directly by using setText
        setText(newText)
    }

    const handleLoClick =() => {
        // console.log('Convert button clicked')
        let newText = text.toLowerCase()        // access the text variable and modify the required properties and store in a new variable or update directly by using setText
        setText(newText)
    }

    const [text, setText] = useState('Enter text here') // write inside the function only. text is a state variabel and setText is a updating variable like setState. setText name is our wish "set" 2nd word what ever we want "name"  setName
    // text = 'Clear the text first'  worng way to update text
    // setText('Clear the text first')    correct way to update text by setText like setState
    
  return (
    <>
    <div className='container m-3'>
        <h1 className='text-center'>{props.heading}</h1>
        {/* give the value by using props to element */}
        <div className="w-70 mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="w-80 mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
            {/* give the value by useState given variabel >> text.   add event listener >> onChange and call the function handler */}
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary" onClick={handleLoClick} >Convert to LowerCase</button>
        {/* call the trigger by using onClick and function handler  */}
    </div>
    <div className='container2 m-3'>
        <h2>Your Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters </p>
        <h2>Previwe</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
