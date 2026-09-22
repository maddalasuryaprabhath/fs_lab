import './App.css'

function App() {
  function handleClick() {
    alert('Button clicked! Handle Click function executed.');
  }
  return (

    <>

    <h1>Hello World</h1>

    <button onClick={() => alert('Button clicked!')}>Click Me</button>

    <button onClick={handleClick}>Click for hand</button>

    {/* image through public folder */}
    <img src="https://anits.org/static/images/campus.jpg" alt="Campus" />

    {/* image through src folder */}
    <img className="favicon" src= "favicon.svg" alt="Campus" /> 

    </>

  );
}

export default App;