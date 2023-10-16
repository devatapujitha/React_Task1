import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };
  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };
  const wordCount = countWords(text);
  return (
    <div>
       <center>
       <div style={{width:"30%",marginTop:"10%"}} class="borded shadow py-5 ">
            <h1>Responsive Paragraph Word Counter</h1>
            <textarea rows="4" cols="50" value={text} onChange={handleTextChange}/>
            <p>Word Count: {wordCount}</p>
      </div>
       </center>
    </div>
  );
}
export default WordCounter;