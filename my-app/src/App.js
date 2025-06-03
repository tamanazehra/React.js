

function Welcome() {
  const name = "Tamana";
  return <h1>Hello, {name}! Welcome to React.</h1>;
}

function ProfileCard({ name, bio, location  }) {
  return <div className="info">
    <h2>{name}</h2>
    <p>{bio}</p>
    <p>{location}</p>
    </div>
}

function Footer(prop) {
  return <p>© {prop.year} {prop.name} All rights reserved.</p>;
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <ProfileCard 
        name={"Tamana"}
        bio={"A passionate developer."}
        location={"Dhaka, Bangladesh"} />
      <Footer year = {2025} name = {"Tamana"} />
      
    </div>
  );
}

export default App;
