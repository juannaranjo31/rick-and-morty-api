import React from "react";

export const ResidentInfo = ({character}) => {
  return (
    <section className="character">
      <div className="character-header">
        <div className="state">
          <span className={character.status}></span>
          <h4>{character.status}</h4>
        </div>
      </div>

      <div className="character-body">
        <figure>
          <img src={character.image} alt={character.name} />
        </figure>

        <h2>{character.name}</h2>
        <p>
          {character.species} <span>-</span> {character.gender}
        </p>
      </div>
    </section>
  );
};

export default ResidentInfo;