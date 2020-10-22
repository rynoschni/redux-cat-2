import React from "react";
import AddCat from "./components/AddCat";
import CatList from "./components/CatList";

function App() {
  return (
    <div className="App">
      <h1>Satan's Spawn</h1>
      <AddCat />
      <CatList />
    </div>
  );
}

export default App;