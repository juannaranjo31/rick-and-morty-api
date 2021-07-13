import { useState } from "react";
import SearchBox from "./components/SearchBox";
import LocationContainer from "./components/LocationContainer";
import Logo from "./assets/logo.png";

import "./index.css";
function App () {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = (dataInput) => {
        setInputValue(dataInput);
    }

    return (
      <div className="container">
      <figure className="logo">
        <img src={Logo} alt="Logo de Rick & Morty" />
      </figure>
      <SearchBox inputMethod={handleSearch} />
      {inputValue && <LocationContainer inputData={inputValue}/>}
      
      </div>
    )
}

export default App;
