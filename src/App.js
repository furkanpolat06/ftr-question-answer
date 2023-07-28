import { useState } from "react";
import data from "./helpers/data";
import Card from "./components/Card";
import "./App.css"
<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Distressed&family=Shadows+Into+Light&display=swap');
</style>



function App() {
  const [questions, setQuestions] = useState(data);
  console.log(questions);
  return (

    <>
    <div><h1>PHYSIOTHERAPY QUESTION AND ANSWER</h1> </div>
    
  {questions.map((question)=>{
    return(

      <Card question={question}/>
      )
    
  })}
  </>
  )
}

export default App;
