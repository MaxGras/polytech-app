
import { useState } from 'react';
import Lab4 from './components/lab4';
import { Lab5 } from './components/lab5';
import Lab6 from './components/lab6';

function App() {
  const [activeLab, setActiveLab] = useState(4);
  let content;


  switch(activeLab){
    case 4: content = <Lab4/>
    break
    case 5: content = <Lab5/>
    break
    case 6: content = <Lab6/>
    break
    default: content = <Lab4/> 
  }
  
  return (
    <div className="App" style={{color:"white",  backgroundColor:"#000"}}>
     <p>Click on button to see different labs</p>
     <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"10px"}}>
      <button onClick={()=>setActiveLab(4)}>Lab 4</button>
      <button onClick={()=>setActiveLab(5)}>Lab 5</button>
      <button onClick={()=>setActiveLab(6)}>Lab 6</button>
     </div>
     {content}
    </div>
  );
}

export default App;
