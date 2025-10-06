import { useState } from "react";
function App() {
  let a = 120;
   console.log(a)
   let name = "virendra kumar dwivedi"
   console.log(name)
  setTimeout(()=>{
    console.log(name)
   },10000)

   const [Fname1, setFName1] = useState("virendra");
  const [Lname1, setLName1] = useState(" dwivedi");

  return (
    <div>
      <p></p>
      
    </div>
  );
}

export default App;
