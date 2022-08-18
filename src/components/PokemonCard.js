import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [sprite, setSprite] = useState(true);
  const { name, hp, sprites } = pokemon;

  function handleClick() {
    setSprite((sprite) => !sprite);
  }
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={sprite ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
