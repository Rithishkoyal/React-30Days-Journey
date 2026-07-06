import React, { useState,useEffect } from 'react'

const PassGenerator = () => {

    const [Password,setPassword] = useState('');
    const [length,setlength] = useState(12);
    const [uppercase,setUppercase] = useState(false);
    const [lowercase,setlowercase] = useState(true);
    const[includeNumber,setincludeNumber] = useState(false);
    const [symbols,setsymbols] = useState(false);
const lowercasecharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers = "0123456789";
const symbolchars = "~`!@#$%^&*()_+={}[]|\?/.,<>"
const generatePass =() =>{
let characters = "";
    let newPass = "";
    if(lowercase){
        characters+=lowercasecharacters
    }
    if(includeNumber){
        characters+=Numbers
    }
    if(symbols){
        characters+=symbolchars
    }
      if(uppercase){
        characters+=uppercaseChars;
    }
    if(characters ===''){
        alert('please Select at least one character type');
        return;
    }
for (let i = 0; i < length; i++) {
  
    const randomIndex = Math.floor(Math.random()*characters.length);
    newPass += characters[randomIndex];
}

setPassword(newPass);
}
useEffect(()=>{
    generatePass();
},[length,lowercase,uppercase,includeNumber,symbols])
const copyPassword =()=>{

    if(!Password){
        alert("Generate a password first");
    }
    navigator.clipboard.writeText(Password);
    alert('password copied !')
}
  return (
    <div>
      <h1>Password Generator</h1>
      <input 
          type ="text"
          value={Password}
          readOnly
      />
      <br/>
    <label>Password length</label>
      
      <input
        type='range'

        value={length}
        onChange={(e)=> setlength(Number(e.target.value))}
        min='6'
        max="30"
      
      />

      <p>{length}</p>
        <div>
            <label>
                <input type='checkbox'
                checked={uppercase}
                onChange={(e)=>setUppercase(e.target.checked)}/>
                Uppercase
            </label>
             <label>
                <input type='checkbox'
                checked={lowercase}
                onChange={(e)=>setlowercase(e.target.checked)}/>
                Lowercase
            </label>
             <label>
                <input type='checkbox'
                checked = {includeNumber}
                onChange={(e)=>setincludeNumber(Number(e.target.checked))}/>
                Numbers
            </label>

             <label>
                <input type='checkbox'
                checked={symbols}
                onChange={(e)=>setsymbols(e.target.checked)}/>
                Symbols
            </label>
        </div>

        <button onClick={generatePass}>Generate Password</button>

        <button onClick={copyPassword}>Copy</button>

      
    </div>
  )
}

export default PassGenerator
