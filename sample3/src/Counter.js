import React,{useState,useEffect} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  useEffect(() => {
    console.log('MOUNTING')
    console.log('UPDATING')
    console.log('c1: '+count)
    console.log('c2: '+count2)
    return () => {
      console.log('UNMOUNTING')
    }
  }, [count,count2])
  
    
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1>Counter:{count}</h1>

      <button onClick={()=>setCount2(count2+1)}>Increment</button>
      <h1>Counter2:{count2}</h1>
       
    </div>
  )
}

export default Counter
