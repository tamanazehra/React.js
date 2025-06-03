

function Welcome() {
  const name = "Tamana";
  return <h1>Hello, {name}! Welcome to React.</h1>;
}
function Body(){
  return <p>This is the body of the application.</p>;
}
function Footer() {
  return <p>© 2025 Tamana. All rights reserved.</p>;
}


function App() {
  return (
    <div className="App">
      <Welcome />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
