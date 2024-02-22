import { useState } from "react";

export function Lab5(){
    //Lab5_1
    const [inputData, setInputData] = useState("");
    const handleOccurence = (string, substring) => {
        const regex = new RegExp(substring, 'g');
        return (string.match(regex) || []).length;
    }
    
    //Lab 5_2
    const { modifiedString, wordCountAfterSingleSpace } = modifyString(inputData);
   


    
    
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"20px" }}>
            <p>Lab 5_1</p>
            <input style={{width:"300px", marginBlockEnd:"20px"}} value={inputData} onChange={(e)=>setInputData(e.target.value)}  placeholder="paste the string here..."/>
            {inputData &&  <pre>{inputData.replaceAll("0","OO")}</pre>}
            {inputData &&  <div>Occurency of "+" in input between 3 and 9 index is : {handleOccurence(inputData.slice(3,9), "\\+")}</div>}
            {inputData &&  <pre>{modifiedString}</pre>}
            {inputData && <pre>Words with single space: {wordCountAfterSingleSpace}</pre>}
            {inputData && <pre>Encrypted text with step 1: {caesarCipher(inputData,1)}</pre>}
            {inputData && <pre>Encrypted text with step 2: {caesarCipher(inputData,2)}</pre>}
            {inputData && <pre>Decrypted text with step 2: {caesarCipher(caesarCipher(inputData,2),-2)}</pre>}
            {inputData && <pre>Shuffled string: {shuffleString(inputData)}</pre>}
        </div>
    );
}

function modifyString(inputString) {
    let counter = 0;
    const words = inputString.split(" ").map((item,index)=>{
        if(item.trim() !== ""){
            counter++;
            if((counter) % 3 === 0){
                item +="-"
                counter = 0;
            }
        }
        return item;
    })

    const wordCountAfterSingleSpace = inputString.split(/(\s+)/).filter((item,index)=>{if(/(\s)/.test(item) && item.length>1 && index) return item});
        
    return { modifiedString: words.join(" "), wordCountAfterSingleSpace: wordCountAfterSingleSpace.length };
}

 // Lab 5_2
function caesarCipher(text, step) {
    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        let encryptedCharCode;

        
        if (charCode >= 65 && charCode <= 90) {
            encryptedCharCode = ((charCode - 65 + step) % 26 + 26) % 26 + 65;
        } 
        
        else if (charCode >= 97 && charCode <= 122) {
            encryptedCharCode = ((charCode - 97 + step) % 26 + 26) % 26 + 97;
        } 
        else {
            encryptedCharCode = charCode; 
        }
        encryptedText += String.fromCharCode(encryptedCharCode);
    }
    return encryptedText;
}


//lab5_4
function shuffleString(string) {
    if (string.length <= 2) {
        return string;
    }
    
    let firstChar = string.charAt(0);
    let lastChar = string.charAt(string.length - 1);
    
    
    let middlePart = string.substring(1, string.length - 1).split('');
    
  
    for (let i = middlePart.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = middlePart[i];
        middlePart[i] = middlePart[j];
        middlePart[j] = temp;
    }
    
    
    return firstChar + middlePart.join('') + lastChar;
}