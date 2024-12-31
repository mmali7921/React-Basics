import { useState } from 'react';
import Counter from './Counter';
import Employee from './Employee';

function App() {

  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  }

  let obj = {
    title: "1st Counter",
    count
  }
  {/* if there is ", place " in obj */}



    let emp = [
      {name: "John",age: 25},{name: "Smith",  age: 30},
    {name: "Tom", age: 35}
  ]




  return (
    <div >
      <h1>React App</h1>
      
      <Counter {...obj}/> {/* Spread operator */}
      <Counter title="2nd Counter" count={count}/>
      <button  onClick={addCount}>Increment</button>

      <br></br>

      {//javascript expression

        /* emp.map((obj, index) => {
          return (<Employee key={index} name={obj.name} age={obj.age}/>)
        })
          */


        //single line expression with return only
        emp.map((obj, index) => 
          <Employee key={index} name={obj.name} age={obj.age}/>
        )

        //multi line expression with return only
        /* emp.map((obj, index) => {
          return <Employee key={index} name={obj.name} age={obj.age}/>
        }) */


       


        

        


      }
    




     
    </div>

  
  
  );
}

export default App;
