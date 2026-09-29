function Home() {
      
  function handleClick() {
    alert('Button clicked! Handle Click function executed.');
  }

  function handleChange() {
      console.log("The input has changed");
  }

  const variable = "Variable in jsx";

  return (
    <>
        <h1>Hello World</h1>

    {/* onchange event */}
    <input type="text" onChange={handleChange} />
    
    <button onClick={() => alert('Button clicked!')}>Click Me</button>
    <button onClick={handleClick}>Click for handle </button>

    {/* image through public folder */}
    <img src="https://anits.org/static/images/campus.jpg" alt="Campus" />
    {/* image through public folder */}
    <img className="favicon" src= "favicon.svg" alt="Campus" /> 

    {/* importing a component*/}
    
    <h1>{variable}</h1> 
    </>
  );
}

export default Home;