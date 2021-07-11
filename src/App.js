import { useState, useEffect } from "react";
import Logo from "./assets/logo.png";
import { SearchBox } from "./components/SearchBox";
import { ResidentInfo } from "./components/ResidentInfo";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCharacters(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, []);

  const CharactersFilter = characters.filter((character) =>
    character.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className="container">
      <figure className="logo">
        <img src={Logo} alt="Logo de Rick & Morty" />
      </figure>
      {/* form filter */}
      <SearchBox filter={filter} setFilter={setFilter} />
      {/* form filter */}

      {/* section characters */}
      <section className="characters-list">
        {loading ? (
          <p>loading...</p>
        ) : CharactersFilter.length > 0 ? (
          CharactersFilter.map((character) => (
            <ResidentInfo key={character.id} character={character} />
          ))
        ) : (
          <p>
            No characters found with your search <strong>"{filter}"</strong>.
          </p>
        )}
      </section>
      {/* section characters */}
    </div>
  );
}

export default App;
