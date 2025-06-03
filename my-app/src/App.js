import React, { useState } from 'react';
import './App.css';

function ThemeToggler() {
  const [isDark, setIsDark] = useState(false);

  // Style object based on theme
  const themeStyle = {
    backgroundColor: isDark ? "#333" : "#f4f4f4",
    color: isDark ? "#fff" : "#000",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    transition: "all 0.3s ease"
  };

  return (
    <div style={themeStyle}>
      <h2>Current Theme: {isDark ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setIsDark(!isDark)}>
        Toggle Theme
      </button>
    </div>
  );
}


function App() {
  return (
   <div className= "App" >
      <ThemeToggler />
    </div>
  );
}

export default App;
