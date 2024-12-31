import React,{useState} from 'react';
            

function Counter({title,count}) {
    {/* use ...obj instead of count in parameter (rest operator) use obj.count in code*/}
   
   
  return (
    <div>
      <h1>{title}:{count}</h1>
      
    </div>
  )
}

export default Counter
