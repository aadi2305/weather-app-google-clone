import React from "react";
import Header from "./components/Header"
import MainData from "./components/MainData"
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Header />
      <MainData />
    </div>
  );
}

export default App;
