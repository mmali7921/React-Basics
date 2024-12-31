import './App.css'
import Header from './components/Header'   
{/*importing the Header file*/}

function App() {
  const name = 'React'; {/* variable*/}
  return (
    <div>
      <Header data={name} />  {/*calling the Header function and passing the variable name*/}

      <h1 style={{color:"red"}}>Hello, world!</h1>
      <h2 className='hello'>hi hi</h2>  {/*className instead of class*/}

      <HI />
      <HI />  {/* calling the function HI */}

      <p>this is a {name}</p>  {/* this is a React */}
     </div>
  );
}

function HI() {
  return (
    <div>
      <h1 style={{backgroundColor:"blue"}}>Hi</h1>
    </div>
  );
}

export default App;
